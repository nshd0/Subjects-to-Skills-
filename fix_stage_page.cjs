const fs = require('fs');
let content = fs.readFileSync('src/pages/StagePage.tsx', 'utf8');

const regex = /className="w-full h-auto object-cover aspect-4\/3"\s*\/>\s*<\/motion\.div>\s*\)\}\s*<\/div>\s*<\/div>\s*<\/div>/g;
content = content.replace(regex, `className="w-full h-auto object-cover aspect-4/3"
                />
              </motion.div>
            )}
          </div>
          
          {stage.compliance && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <CompliancePanel compliance={stage.compliance} />
            </motion.div>
          )}
        </div>
      </div>`);

fs.writeFileSync('src/pages/StagePage.tsx', content);
console.log('done');
