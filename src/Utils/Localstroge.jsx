const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e1.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      { active: true, newTask: false, completed: false, failed: false, taskTitle: "Fix Login Bug", taskDescription: "Resolve authentication issue", taskDate: "2026-03-02", category: "Dev" },
      { active: true, newTask: false, completed: false, failed: false, taskTitle: "Update UI", taskDescription: "Improve homepage design", taskDate: "2026-03-05", category: "Design" },
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Create Dashboard", taskDescription: "Build admin panel UI", taskDate: "2026-03-07", category: "Frontend" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "API Integration", taskDescription: "Connect backend API", taskDate: "2026-03-01", category: "Backend" },
      { active: false, newTask: false, completed: false, failed: true, taskTitle: "Payment Error Fix", taskDescription: "Fix gateway issue", taskDate: "2026-03-03", category: "Backend" }
    ]
  },

  {
    id: 2,
    firstName: "Vihaan",
    email: "e@e2.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      { active: true, newTask: false, completed: false, failed: false, taskTitle: "Optimize Images", taskDescription: "Compress website images", taskDate: "2026-03-02", category: "Performance" },
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Landing Page Design", taskDescription: "Create landing UI", taskDate: "2026-03-06", category: "Design" },
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Add Animations", taskDescription: "Framer motion animations", taskDate: "2026-03-08", category: "Frontend" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "Fix Navbar", taskDescription: "Responsive navbar fix", taskDate: "2026-03-01", category: "UI" }
    ]
  },

  {
    id: 3,
    firstName: "Arjun",
    email: "e@e3.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      { active: true, newTask: false, completed: false, failed: false, taskTitle: "Security Testing", taskDescription: "Run security scan", taskDate: "2026-03-04", category: "Security" },
      { active: true, newTask: false, completed: false, failed: false, taskTitle: "Database Setup", taskDescription: "Setup MongoDB", taskDate: "2026-03-05", category: "Database" },
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Write Docs", taskDescription: "API documentation", taskDate: "2026-03-09", category: "Documentation" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "Server Deployment", taskDescription: "Deploy backend", taskDate: "2026-03-02", category: "DevOps" }
    ]
  },

  {
    id: 4,
    firstName: "Rohan",
    email: "e@e4.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
    tasks: [
      { active: true, newTask: false, completed: false, failed: false, taskTitle: "Animation Setup", taskDescription: "Add Lottie animation", taskDate: "2026-03-06", category: "Animation" },
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "SEO Optimization", taskDescription: "Improve ranking", taskDate: "2026-03-08", category: "Marketing" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "Content Update", taskDescription: "Update blog content", taskDate: "2026-03-03", category: "Content" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "Fix Footer", taskDescription: "Footer alignment fix", taskDate: "2026-03-01", category: "UI" }
    ]
  },

  {
    id: 5,
    firstName: "Kabir",
    email: "e@e5.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      { active: true, newTask: false, completed: false, failed: false, taskTitle: "Email Campaign", taskDescription: "Launch marketing emails", taskDate: "2026-03-07", category: "Marketing" },
      { active: true, newTask: false, completed: false, failed: false, taskTitle: "Product Analysis", taskDescription: "Analyze product metrics", taskDate: "2026-03-09", category: "Analytics" },
      { active: false, newTask: true, completed: false, failed: false, taskTitle: "Social Media Post", taskDescription: "Create post content", taskDate: "2026-03-11", category: "Social" },
      { active: false, newTask: false, completed: true, failed: false, taskTitle: "Report Generation", taskDescription: "Monthly report", taskDate: "2026-03-02", category: "Admin" }
    ]
  }
];


const admin = {
  id: 1,
  firstName: "Raj",
  email: "admin@example.com",
  password: "123",
};

export const Setlocalstroge = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getlocalstroge = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
