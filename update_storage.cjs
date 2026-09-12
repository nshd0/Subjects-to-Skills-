const fs = require('fs');
let code = fs.readFileSync('src/features/planning/useWizardStorage.ts', 'utf8');
code = code.replace(
  "import { LessonPlan, WizardAssessment } from './wizardTypes';",
  "import { LessonPlan, WizardAssessment, IntegratedUnit } from './wizardTypes';"
);
code += `
export function useWizardIntegratedUnits() {
  const [units, setUnits] = useState<IntegratedUnit[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('wizard_integrated_units');
    if (stored) {
      setUnits(JSON.parse(stored));
    }
  }, []);

  const saveUnit = (unit: IntegratedUnit) => {
    const newUnits = [...units.filter(u => u.id !== unit.id), unit];
    setUnits(newUnits);
    localStorage.setItem('wizard_integrated_units', JSON.stringify(newUnits));
  };

  const deleteUnit = (id: string) => {
    const newUnits = units.filter(u => u.id !== id);
    setUnits(newUnits);
    localStorage.setItem('wizard_integrated_units', JSON.stringify(newUnits));
  };

  return { units, saveUnit, deleteUnit };
}
`;
fs.writeFileSync('src/features/planning/useWizardStorage.ts', code);
