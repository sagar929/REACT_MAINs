const employees = [
    {
      id: "EMP001",
      firstName: "Aarav",
      email: "employee1@example.com",
      password: "123",
      taskSummary: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 1
      },
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Design Homepage",
          description: "Create a modern homepage UI",
          date: "2025-04-15",
          category: "Design"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Fix Navbar Bug",
          description: "Resolve sticky navbar issue on scroll",
          date: "2025-03-25",
          category: "Development"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Client Presentation",
          description: "Prepare pitch for upcoming project",
          date: "2025-03-10",
          category: "Marketing"
        }
      ]
    },
    {
      id: "EMP002",
      firstName: "Priya",
      email: "employee2@example.com",
      password: "123",
      taskSummary: {
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 1
      },
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "API Integration",
          description: "Connect frontend to weather API",
          date: "2025-04-17",
          category: "Development"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Write Docs",
          description: "Prepare documentation for user onboarding",
          date: "2025-03-28",
          category: "Documentation"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Login UI",
          description: "Failed attempt to design responsive login",
          date: "2025-03-15",
          category: "UI/UX"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          title: "SEO Audit",
          description: "Improve page SEO ranking",
          date: "2025-04-19",
          category: "Marketing"
        }
      ]
    },
    {
      id: "EMP003",
      firstName: "Rahul",
      email: "employee3@example.com",
      password: "123",
      taskSummary: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 1
      },
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Testing App",
          description: "Write unit tests for dashboard",
          date: "2025-04-18",
          category: "QA"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Bug Report",
          description: "Log and report dashboard bugs",
          date: "2025-04-02",
          category: "QA"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Refactor Code",
          description: "Optimize old React components",
          date: "2025-03-20",
          category: "Development"
        }
      ]
    },
    {
      id: "EMP004",
      firstName: "Isha",
      email: "employee4@example.com",
      password: "123",
      taskSummary: {
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 1
      },
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Create Landing Page",
          description: "Build a responsive landing page",
          date: "2025-04-16",
          category: "Design"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Setup Hosting",
          description: "Deploy project to Vercel",
          date: "2025-04-10",
          category: "DevOps"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          title: "Write Blog Post",
          description: "Publish a blog on new features",
          date: "2025-04-18",
          category: "Content"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Sprint Review",
          description: "Missed sprint deadline",
          date: "2025-04-05",
          category: "Management"
        }
      ]
    },
    {
      id: "EMP005",
      firstName: "Karan",
      email: "employee5@example.com",
      password: "123",
      taskSummary: {
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 1
      },
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Data Cleanup",
          description: "Clean and format Excel data",
          date: "2025-04-18",
          category: "Data"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Team Meeting",
          description: "Attend weekly sync-up",
          date: "2025-04-12",
          category: "Management"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "App Deployment",
          description: "Failed to deploy React app to Netlify",
          date: "2025-03-30",
          category: "DevOps"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          title: "Analytics Report",
          description: "Generate Q1 insights",
          date: "2025-04-18",
          category: "Analytics"
        }
      ]
    }
  ];
  
  
  const admin = [
    {
      id: "ADMIN001",
      email: "admin@me.com",
      password: "123"
    }
  ];
  

  export const setLocalStorage = ()=>{
       localStorage.setItem('employees', JSON.stringify(employees))
       localStorage.setItem('admin', JSON.stringify(admin))
  }

  export const getLocalStorage = () => {
    const employees =  JSON.parse(localStorage.getItem('employees'))
    const admin =  JSON.parse(localStorage.getItem('admin'))
 
    return {employees, admin}
     
  }

  