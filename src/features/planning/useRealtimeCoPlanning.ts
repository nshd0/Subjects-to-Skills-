import { useState, useEffect, useRef, useMemo } from 'react';
import { 
  UnitPlanCRDTEngine, 
  INITIAL_UNIT_PLAN 
} from './crdt/yjsSyncEngine';
import { 
  CollaborativeUnitPlan, 
  CollaborativeLessonPlan, 
  CollaboratorRole 
} from '@/types';

export function useRealtimeCoPlanning() {
  const engineRef = useRef<UnitPlanCRDTEngine | null>(null);
  const [unitPlan, setUnitPlan] = useState<CollaborativeUnitPlan>(INITIAL_UNIT_PLAN);
  const [isSuggestMode, setIsSuggestMode] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'editor' | 'comments' | 'suggestions' | 'activity' | 'crdt-demo'>('editor');
  const [syncStatus, setSyncStatus] = useState<'synced' | 'syncing' | 'offline'>('synced');
  const [lastConflictResult, setLastConflictResult] = useState<string | null>(null);

  useEffect(() => {
    const engine = new UnitPlanCRDTEngine(INITIAL_UNIT_PLAN);
    engineRef.current = engine;

    engine.subscribe((plan) => {
      setSyncStatus('syncing');
      setUnitPlan({ ...plan });
      setTimeout(() => setSyncStatus('synced'), 250);
    });

    return () => {
      engine.destroy();
    };
  }, []);

  const updateField = (field: string, value: any) => {
    if (!engineRef.current) return;
    engineRef.current.updateField(field, value);
  };

  const updateLesson = (lessonId: string, fields: Partial<CollaborativeLessonPlan>) => {
    if (!engineRef.current) return;
    engineRef.current.updateLesson(lessonId, fields);
  };

  const addComment = (section: string, text: string, lessonId?: string) => {
    if (!engineRef.current) return;
    engineRef.current.addComment({
      authorId: 'user-self',
      authorName: 'You (Lead Educator)',
      section,
      text,
      lessonId
    });
  };

  const addReply = (commentId: string, text: string) => {
    if (!engineRef.current) return;
    engineRef.current.addReply(commentId, 'user-self', 'You (Lead Educator)', text);
  };

  const toggleResolveComment = (commentId: string) => {
    if (!engineRef.current) return;
    engineRef.current.toggleResolveComment(commentId);
  };

  const submitSuggestion = (section: string, field: string, originalText: string, suggestedText: string) => {
    if (!engineRef.current) return;
    engineRef.current.submitSuggestion({
      authorId: 'user-self',
      authorName: 'You (Lead Educator)',
      section,
      field,
      originalText,
      suggestedText
    });
  };

  const resolveSuggestion = (suggestionId: string, action: 'accept' | 'reject') => {
    if (!engineRef.current) return;
    engineRef.current.resolveSuggestion(suggestionId, action, 'You (Lead Educator)');
  };

  const setUserRole = (role: CollaboratorRole) => {
    if (!engineRef.current) return;
    engineRef.current.setUserRole(role);
  };

  const runConcurrentConflictTest = () => {
    if (!engineRef.current) return;
    const res = engineRef.current.simulateConcurrentEdits();
    setLastConflictResult(res.log);
  };

  const pendingSuggestionsCount = useMemo(() => {
    return unitPlan.suggestions.filter(s => s.status === 'pending').length;
  }, [unitPlan.suggestions]);

  const activeCommentsCount = useMemo(() => {
    return unitPlan.comments.filter(c => !c.resolved).length;
  }, [unitPlan.comments]);

  return {
    unitPlan,
    updateField,
    updateLesson,
    addComment,
    addReply,
    toggleResolveComment,
    submitSuggestion,
    resolveSuggestion,
    setUserRole,
    runConcurrentConflictTest,
    lastConflictResult,
    isSuggestMode,
    setIsSuggestMode,
    activeTab,
    setActiveTab,
    syncStatus,
    pendingSuggestionsCount,
    activeCommentsCount
  };
}
