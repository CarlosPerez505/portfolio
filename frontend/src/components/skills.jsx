import React, { useState, useEffect } from 'react';

import { Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';

const skills = [
    {
        name: 'HTML',
        category: 'Frontend',
        code: `<section class="hero">
  <h1>Welcome to my portfolio</h1>
  <p>I create beautiful, responsive websites.</p>
</section>`
    },
    {
        name: 'CSS',
        category: 'Frontend',
        code: `.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  text-align: center;
}`
    },
    {
        name: 'JavaScript',
        category: 'Frontend',
        code: `function animateText(element) {
  const text = element.innerText;
  element.innerText = '';
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      element.innerText += text[i];
    }, 100 * i);
  }
}`
    },
    {
        name: 'React',
        category: 'Frontend',
        code: `function Welcome({ name }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`
    },
    {
        name: 'Node.js',
        category: 'Backend',
        code: `const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});`
    },
    {
        name: 'OpenAI',
        category: 'AI',
        code: `import openai

openai.api_key = 'your-api-key'

response = openai.Completion.create(
  engine="text-davinci-002",
  prompt="Translate the following English text to French: 'Hello, how are you?'",
  max_tokens=60
)

print(response.choices[0].text.strip())`
    },
    {
        name: 'Git',
        category: 'Version Control',
        code: `# Initialize a new Git repository
git init

# Add files to staging area
git add .

# Commit changes
git commit -m "Initial commit"

# Create and switch to a new branch
git checkout -b feature-branch

# Merge changes from feature branch to main
git checkout main
git merge feature-branch`
    },
    {
        name: 'GitHub',
        category: 'Version Control',
        code: `# Clone a repository
git clone https://github.com/username/repo.git

# Push changes to GitHub
git push origin main

# Create a pull request (via GitHub UI)

# Fetch and merge changes
git pull origin main

# Fork a repository (via GitHub UI)
`
    },
    {
        name: 'Linux',
        category: 'Operating Systems',
        code: `# Update package list
sudo apt update

# Install a package
sudo apt install package-name

# Navigate directories
cd /path/to/directory

# List files and directories
ls -la

# Find files
find / -name "filename"

# Check system resources
top

# Modify file permissions
chmod 755 filename`
    }
];

const categories = ['All', ...new Set(skills.map(skill => skill.category))];

const SkillsSection = () => {
    const [filter, setFilter] = useState('All');
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [theme, setTheme] = useState('dark'); // Theme state initialized to 'dark'

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        // Apply the theme to the body or document element
        document.documentElement.className = theme;
    }, [theme]);

    const filteredSkills = filter === 'All'
        ? skills
        : skills.filter(skill => skill.category === filter);

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">My Skills</h2>
            <div className="flex flex-wrap gap-2 mb-4">
                {categories.map(category => (

                    <p></p>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredSkills.map(skill => (
                    <Card
                        key={skill.name}
                        className="cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => setSelectedSkill(skill)}
                    >
                        <CardHeader>
                            <CardTitle>{skill.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
              <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
                <code>{skill.code.split('\n').slice(0, 3).join('\n')}...</code>
              </pre>
                        </CardContent>
                    </Card>
                ))}
            </div>
            {selectedSkill && (
                <Card className="mt-6">
                    <CardHeader>
                        <CardTitle>{selectedSkill.name} Example</CardTitle>
                    </CardHeader>
                    <CardContent>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
              <code>{selectedSkill.code}</code>
            </pre>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default SkillsSection;