const fs = require('fs');

let path2 = 'src/pages/StagePage.tsx';
let content2 = fs.readFileSync(path2, 'utf8');

// The file should have:
// import React, { useState, useEffect } from 'react';
// import { useParams, NavLink } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { db } from '@/lib/firebase';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { ... } from 'lucide-react';
// ...

// Remove the bad react-router-dom import line entirely
content2 = content2.replace(/import \{ NavLink, Loader2 \} from 'react-router-dom';\n/g, "");
content2 = content2.replace(/import \{ Loader2, NavLink \} from 'react-router-dom';\n/g, "");
content2 = content2.replace(/import \{ NavLink \} from 'react-router-dom';\n/g, "");

// Add back NavLink to the top
content2 = content2.replace(
  "import { useParams } from 'react-router-dom';", 
  "import { useParams, NavLink } from 'react-router-dom';"
);

fs.writeFileSync(path2, content2);
console.log('Fixed router dom');
