export const questions = [
    // Section 1: Software Architecture Evolution (30 questions)
    {
        section: "Software Architecture Evolution",
        question: "Which of the following is a key characteristic of monolithic architecture?",
        options: [
            "Loosely coupled components",
            "Single codebase for all functionalities",
            "Independent deployment of services",
            "Event-driven communication"
        ],
        answer: 1,
    },
    {
        section: "Software Architecture Evolution",
        question: "What is the primary advantage of microservices over monolithic architecture?",
        options: [
            "Simpler debugging process",
            "Improved scalability and maintainability",
            "Reduced need for APIs",
            "Lower initial development cost"
        ],
        answer: 1,
    },
    {
        section: "Software Architecture Evolution",
        question: "Which of the following is a challenge of microservices architecture?",
        options: [
            "Tight coupling of components",
            "Difficulty in managing distributed systems",
            "Limited scalability",
            "Single point of failure"
        ],
        answer: 1,
    },
    {
        section: "Software Architecture Evolution",
        question: "What is the role of an API gateway in microservices?",
        options: [
            "To manage database connections",
            "To provide a single entry point for client requests",
            "To handle serverless function execution",
            "To enforce monolithic architecture"
        ],
        answer: 1,
    },
    {
        section: "Software Architecture Evolution",
        question: "Which architecture is best suited for real-time data processing?",
        options: [
            "Monolithic",
            "Microservices",
            "Event-driven",
            "Serverless"
        ],
        answer: 2,
    },
    {
        section: "Software Architecture Evolution",
        question: "What is a key benefit of serverless architecture?",
        options: [
            "Full control over server management",
            "Automatic scaling and reduced operational overhead",
            "Tight coupling of components",
            "High upfront infrastructure costs"
        ],
        answer: 1,
    },
    {
        section: "Software Architecture Evolution",
        question: "Which of the following is a disadvantage of serverless architecture?",
        options: [
            "Vendor lock-in",
            "Complex deployment process",
            "Limited scalability",
            "High maintenance of servers"
        ],
        answer: 0,
    },
    {
        section: "Software Architecture Evolution",
        question: "What is the primary purpose of event-driven architecture?",
        options: [
            "To centralize all application logic",
            "To enable asynchronous communication between services",
            "To reduce the need for APIs",
            "To simplify monolithic systems"
        ],
        answer: 1,
    },
    {
        section: "Software Architecture Evolution",
        question: "Which of the following is a common use case for event-driven architecture?",
        options: [
            "Static websites",
            "Real-time notifications and messaging systems",
            "Monolithic legacy systems",
            "Serverless batch processing"
        ],
        answer: 1,
    },
    {
        section: "Software Architecture Evolution",
        question: "What is the main challenge of migrating from monolithic to microservices?",
        options: [
            "Increased development speed",
            "Managing distributed data consistency",
            "Reduced complexity",
            "Easier debugging"
        ],
        answer: 1,
    },
    {
        section: "Software Architecture Evolution",
        question: "Which of the following is a key feature of microservices?",
        options: [
            "Tightly coupled components",
            "Independent deployment of services",
            "Single database for all services",
            "Centralized logging and monitoring"
        ],
        answer: 1,
    },
    {
        section: "Software Architecture Evolution",
        question: "What is the primary benefit of using containers in microservices?",
        options: [
            "Increased hardware dependency",
            "Consistent environment across development and production",
            "Tight coupling of services",
            "Reduced need for APIs"
        ],
        answer: 1,
    },
    {
        section: "Software Architecture Evolution",
        question: "Which of the following is a disadvantage of monolithic architecture?",
        options: [
            "Easy to scale horizontally",
            "Single point of failure",
            "Independent deployment of components",
            "Loosely coupled services"
        ],
        answer: 1,
    },
    {
        section: "Software Architecture Evolution",
        question: "What is the primary purpose of a service mesh in microservices?",
        options: [
            "To manage database connections",
            "To handle service-to-service communication",
            "To replace API gateways",
            "To enforce monolithic architecture"
        ],
        answer: 1,
    },
    {
        section: "Software Architecture Evolution",
        question: "Which of the following is a key characteristic of serverless architecture?",
        options: [
            "Manual scaling of servers",
            "Event-driven execution of functions",
            "High upfront infrastructure costs",
            "Tight coupling of components"
        ],
        answer: 1,
    },
    {
        section: "Software Architecture Evolution",
        question: "What is the primary benefit of event-driven architecture?",
        options: [
            "Centralized control of all services",
            "Asynchronous and decoupled communication",
            "Reduced need for APIs",
            "Simplified debugging"
        ],
        answer: 1,
    },
    {
        section: "Software Architecture Evolution",
        question: "Which of the following is a common tool for managing microservices?",
        options: [
            "Kubernetes",
            "Apache Hadoop",
            "Docker Compose",
            "All of the above"
        ],
        answer: 3,
    },
    {
        section: "Software Architecture Evolution",
        question: "What is the primary challenge of serverless architecture?",
        options: [
            "Vendor lock-in",
            "High upfront infrastructure costs",
            "Tight coupling of components",
            "Limited scalability"
        ],
        answer: 0,
    },
    {
        section: "Software Architecture Evolution",
        question: "Which of the following is a key benefit of microservices?",
        options: [
            "Simplified debugging",
            "Independent scaling of services",
            "Reduced need for APIs",
            "Centralized logging and monitoring"
        ],
        answer: 1,
    },
    {
        section: "Software Architecture Evolution",
        question: "What is the primary purpose of a message broker in event-driven architecture?",
        options: [
            "To manage database connections",
            "To facilitate communication between services",
            "To replace API gateways",
            "To enforce monolithic architecture"
        ],
        answer: 1,
    },
    {
        section: "Software Architecture Evolution",
        question: "Which of the following is a key characteristic of monolithic architecture?",
        options: [
            "Loosely coupled components",
            "Single codebase for all functionalities",
            "Independent deployment of services",
            "Event-driven communication"
        ],
        answer: 1,
    },
    {
        section: "Software Architecture Evolution",
        question: "What is the primary benefit of using serverless architecture?",
        options: [
            "Full control over server management",
            "Automatic scaling and reduced operational overhead",
            "Tight coupling of components",
            "High upfront infrastructure costs"
        ],
        answer: 1,
    },
    {
        section: "Software Architecture Evolution",
        question: "Which of the following is a disadvantage of microservices?",
        options: [
            "Increased complexity of distributed systems",
            "Tight coupling of components",
            "Limited scalability",
            "Single point of failure"
        ],
        answer: 0,
    },
    {
        section: "Software Architecture Evolution",
        question: "What is the primary purpose of an API gateway in microservices?",
        options: [
            "To manage database connections",
            "To provide a single entry point for client requests",
            "To handle serverless function execution",
            "To enforce monolithic architecture"
        ],
        answer: 1,
    },
    {
        section: "Software Architecture Evolution",
        question: "Which of the following is a key feature of event-driven architecture?",
        options: [
            "Centralized control of all services",
            "Asynchronous and decoupled communication",
            "Reduced need for APIs",
            "Simplified debugging"
        ],
        answer: 1,
    },
    {
        section: "Software Architecture Evolution",
        question: "What is the primary challenge of monolithic architecture?",
        options: [
            "Easy to scale horizontally",
            "Single point of failure",
            "Independent deployment of components",
            "Loosely coupled services"
        ],
        answer: 1,
    },
    {
        section: "Software Architecture Evolution",
        question: "Which of the following is a key benefit of serverless architecture?",
        options: [
            "Manual scaling of servers",
            "Event-driven execution of functions",
            "High upfront infrastructure costs",
            "Tight coupling of components"
        ],
        answer: 1,
    },
    {
        section: "Software Architecture Evolution",
        question: "What is the primary purpose of a service mesh in microservices?",
        options: [
            "To manage database connections",
            "To handle service-to-service communication",
            "To replace API gateways",
            "To enforce monolithic architecture"
        ],
        answer: 1,
    },
    {
        section: "Software Architecture Evolution",
        question: "Which of the following is a common use case for serverless architecture?",
        options: [
            "Static websites",
            "Real-time notifications and messaging systems",
            "Monolithic legacy systems",
            "Batch processing"
        ],
        answer: 3,
    },
    {
        section: "Command Query Responsibility Segregation (CQRS)",
        question: "What is the primary purpose of CQRS pattern?",
        options: [
          "To unify read and write operations into a single model",
          "To separate read and write operations into different models",
          "To eliminate database queries entirely",
          "To remove command functionality from applications"
        ],
        answer: 1,
      },
      {
        section: "Command Query Responsibility Segregation (CQRS)",
        question: "Which statement about CQRS is FALSE?",
        options: [
          "It allows for independent scaling of read and write workloads",
          "It can reduce contention between read and write operations",
          "It is mandatory to implement Event Sourcing alongside CQRS",
          "It enables optimization of query and command models separately"
        ],
        answer: 2,
      },
      {
        section: "Command Query Responsibility Segregation (CQRS)",
        question: "In CQRS, what are 'commands'?",
        options: [
          "Read-only operations that return data but don't modify state",
          "Operations that modify state but don't return data",
          "Both read and write operations combined",
          "Database constraint checks"
        ],
        answer: 1,
      },
      {
        section: "Command Query Responsibility Segregation (CQRS)",
        question: "Which is a common real-world application of CQRS?",
        options: [
          "Simple CRUD applications with minimal traffic",
          "Single-user desktop applications",
          "High-performance financial trading platforms",
          "Static content websites"
        ],
        answer: 2,
      },
      {
        section: "Command Query Responsibility Segregation (CQRS)",
        question: "What is a potential disadvantage of implementing CQRS?",
        options: [
          "Reduced system complexity",
          "Increased data consistency",
          "Increased system complexity",
          "Reduced database size"
        ],
        answer: 2,
      },
      {
        section: "Command Query Responsibility Segregation (CQRS)",
        question: "When is CQRS most beneficial?",
        options: [
          "In systems with equal read and write workloads",
          "In systems where read operations significantly outnumber write operations",
          "In systems with minimal domain complexity",
          "In systems with single-table databases"
        ],
        answer: 1,
      },
      {
        section: "Command Query Responsibility Segregation (CQRS)",
        question: "How does CQRS typically handle data consistency between read and write models?",
        options: [
          "Immediate consistency is always guaranteed",
          "Eventual consistency is often accepted as a trade-off",
          "Consistency is not a concern in CQRS",
          "Only the write model needs to be consistent"
        ],
        answer: 1,
      },
      {
        section: "Command Query Responsibility Segregation (CQRS)",
        question: "Which company is known for implementing CQRS in their e-commerce platform to handle high traffic during sales events?",
        options: [
          "Netflix",
          "Amazon",
          "Google",
          "Microsoft"
        ],
        answer: 1,
      },
      {
        section: "Command Query Responsibility Segregation (CQRS)",
        question: "In a CQRS architecture, what typically happens after a command is processed?",
        options: [
          "The system immediately returns query results",
          "The system enters a locked state",
          "An event is often generated to update read models",
          "The database is rolled back to its previous state"
        ],
        answer: 2,
      },
      {
        section: "Command Query Responsibility Segregation (CQRS)",
        question: "What is a typical data storage strategy in a mature CQRS implementation?",
        options: [
          "Using the same database for both read and write models",
          "Using different databases optimized for reads and writes respectively",
          "Using only in-memory data structures",
          "Avoiding databases entirely in favor of file storage"
        ],
        answer: 1,
      },
      
      // Section 2: Event Sourcing
      {
        section: "Event Sourcing",
        question: "What is the core concept of Event Sourcing?",
        options: [
          "Storing only the current state of an application",
          "Storing application state as a sequence of events",
          "Eliminating the need for databases",
          "Combining multiple databases into one"
        ],
        answer: 1,
      },
      {
        section: "Event Sourcing",
        question: "Which is NOT a benefit of Event Sourcing?",
        options: [
          "Complete audit trail of all changes",
          "Ability to reconstruct past states",
          "Simplified database queries for complex reports",
          "Reliable event history for debugging"
        ],
        answer: 2,
      },
      {
        section: "Event Sourcing",
        question: "In Event Sourcing, how is the current state of the system typically determined?",
        options: [
          "By querying the latest snapshot directly",
          "By calculating it on demand from all past events",
          "By reverting to the initial state",
          "By requesting it from external systems"
        ],
        answer: 1,
      },
      {
        section: "Event Sourcing",
        question: "Which system would benefit MOST from Event Sourcing?",
        options: [
          "A static content management system",
          "A banking system requiring full audit trails of financial transactions",
          "A simple blog with few updates",
          "A read-only reporting application"
        ],
        answer: 1,
      },
      {
        section: "Event Sourcing",
        question: "What is an event store in the context of Event Sourcing?",
        options: [
          "A UI component that displays events",
          "A temporary cache for recent events",
          "A database optimized for storing immutable event records",
          "A message queue for event processing"
        ],
        answer: 2,
      },
      {
        section: "Event Sourcing",
        question: "What are snapshots used for in Event Sourcing?",
        options: [
          "To capture the current state periodically to improve reconstruction performance",
          "To validate event integrity",
          "To encrypt sensitive event data",
          "To generate reports for management"
        ],
        answer: 0,
      },
      {
        section: "Event Sourcing",
        question: "Which real-world industry has widely adopted Event Sourcing?",
        options: [
          "Fast food restaurants",
          "Automotive manufacturing",
          "Financial services and banking",
          "Retail clothing stores"
        ],
        answer: 2,
      },
      {
        section: "Event Sourcing",
        question: "What challenge might you face when evolving an Event Sourced system over time?",
        options: [
          "Events are too transparent",
          "Too few events are generated",
          "Event schema evolution and versioning",
          "Events process too quickly"
        ],
        answer: 2,
      },
      {
        section: "Event Sourcing",
        question: "How does Event Sourcing typically handle data consistency?",
        options: [
          "By using two-phase commits across all systems",
          "By treating the event log as the single source of truth",
          "By disabling consistency checks",
          "By running hourly consistency repair jobs"
        ],
        answer: 1,
      },
      {
        section: "Event Sourcing",
        question: "Which statement about the relationship between CQRS and Event Sourcing is correct?",
        options: [
          "Event Sourcing requires CQRS",
          "CQRS requires Event Sourcing",
          "They are completely unrelated patterns",
          "They are complementary but can be implemented independently"
        ],
        answer: 3,
      },
      
      // Section 3: Dependency Injection
      {
        section: "Dependency Injection",
        question: "What is Dependency Injection?",
        options: [
          "A technique where objects receive other objects they depend on",
          "A method to avoid using external libraries",
          "A way to inject new code into a running application",
          "A technique to compile code faster"
        ],
        answer: 0,
      },
      {
        section: "Dependency Injection",
        question: "Which principle of object-oriented design does Dependency Injection help to follow?",
        options: [
          "Inheritance over composition",
          "Tight coupling between classes",
          "Dependency inversion principle",
          "Single responsibility violation"
        ],
        answer: 2,
      },
      {
        section: "Dependency Injection",
        question: "Which is NOT a common type of Dependency Injection?",
        options: [
          "Constructor injection",
          "Setter injection",
          "Method injection",
          "Direct injection"
        ],
        answer: 3,
      },
      {
        section: "Dependency Injection",
        question: "What is a key benefit of using Dependency Injection in application development?",
        options: [
          "It makes the code run faster",
          "It reduces memory usage",
          "It makes unit testing easier through better isolation",
          "It eliminates the need for interfaces"
        ],
        answer: 2,
      },
      {
        section: "Dependency Injection",
        question: "Which framework was one of the first to popularize Dependency Injection in enterprise applications?",
        options: [
          "React",
          "Spring",
          "jQuery",
          "Vue.js"
        ],
        answer: 1,
      },
      {
        section: "Dependency Injection",
        question: "In Dependency Injection, what is an IoC container?",
        options: [
          "A physical hardware device",
          "A component that manages object creation and injection",
          "A database connection pool",
          "A type of HTTP request handler"
        ],
        answer: 1,
      },
      {
        section: "Dependency Injection",
        question: "How does Dependency Injection affect coupling in an application?",
        options: [
          "It increases coupling for better performance",
          "It has no effect on coupling",
          "It reduces coupling and increases flexibility",
          "It only affects compile-time coupling, not runtime coupling"
        ],
        answer: 2,
      },
      {
        section: "Dependency Injection",
        question: "Which is a real-world benefit of Dependency Injection in large enterprise applications?",
        options: [
          "Simplified deployment to production",
          "Elimination of the need for documentation",
          "Easier component replacement and application evolution",
          "Reduced need for skilled developers"
        ],
        answer: 2,
      },
      {
        section: "Dependency Injection",
        question: "What design pattern is Dependency Injection closely related to?",
        options: [
          "Observer Pattern",
          "Strategy Pattern",
          "Singleton Pattern",
          "Factory Pattern"
        ],
        answer: 3,
      },
      {
        section: "Dependency Injection",
        question: "Which is NOT an advantage of using Dependency Injection?",
        options: [
          "Improved testability",
          "Reduced boilerplate code",
          "Increased modularity",
          "Enhanced application performance"
        ],
        answer: 3,
      },
      {
        section: "DevOps Fundamentals",
        question: "What is the primary goal of DevOps?",
        options: [
          "Eliminating the need for operations teams",
          "Isolating development from operations",
          "Breaking down silos between development and operations teams",
          "Replacing manual testing with automated testing"
        ],
        answer: 2,
      },
      {
        section: "DevOps Fundamentals",
        question: "Which of the following is NOT a key pillar of DevOps culture?",
        options: [
          "Collaboration",
          "Transparency",
          "Strict role separation",
          "Continuous improvement"
        ],
        answer: 2,
      },
      {
        section: "DevOps Fundamentals",
        question: "Which metric is MOST important to measure the effectiveness of DevOps practices?",
        options: [
          "Number of servers managed per engineer",
          "Speed of delivery from code commit to production",
          "Number of tools in the DevOps toolchain",
          "Size of the DevOps team"
        ],
        answer: 1,
      },
      {
        section: "DevOps Fundamentals",
        question: "What is 'Infrastructure as Code' (IaC)?",
        options: [
          "Writing code that automatically scales infrastructure",
          "Managing and provisioning infrastructure through code and automation",
          "Eliminating physical infrastructure in favor of cloud services",
          "Converting infrastructure into microservices"
        ],
        answer: 1,
      },
      {
        section: "DevOps Fundamentals",
        question: "Which company is credited with coining the term 'DevOps'?",
        options: [
          "Google",
          "Amazon",
          "Flickr",
          "Microsoft"
        ],
        answer: 2,
      },
      {
        section: "DevOps Fundamentals",
        question: "What does 'shift left' refer to in DevOps?",
        options: [
          "Moving testing and security earlier in the development process",
          "Reorganizing team seating arrangements",
          "Prioritizing left-side menu items in DevOps tools",
          "Shifting responsibility away from operations teams"
        ],
        answer: 0,
      },
      {
        section: "DevOps Fundamentals",
        question: "Which is NOT a benefit of implementing DevOps practices?",
        options: [
          "Faster time to market",
          "Improved collaboration",
          "Elimination of all production failures",
          "Increased deployment frequency"
        ],
        answer: 2,
      },
      {
        section: "DevOps Fundamentals",
        question: "What is a key characteristic of a DevOps-oriented team structure?",
        options: [
          "Clear separation between developers and operations staff",
          "Cross-functional teams with shared responsibilities",
          "Operations teams managing all deployment activities",
          "Development teams handling only coding activities"
        ],
        answer: 1,
      },
      {
        section: "DevOps Fundamentals",
        question: "Which practice is essential for effective incident management in DevOps?",
        options: [
          "Blameless postmortems",
          "Identifying individual responsibility for failures",
          "Reducing documentation of incidents",
          "Escalating all issues to management"
        ],
        answer: 0,
      },
      {
        section: "DevOps Fundamentals",
        question: "What is the concept of 'you build it, you run it' in DevOps?",
        options: [
          "QA teams should test their own code",
          "Developers are responsible for the code they write in production",
          "Operations teams build and run all systems",
          "Product managers should help develop features they request"
        ],
        answer: 1,
      },
      
      // Section 2: CI/CD Pipeline Components
      {
        section: "CI/CD Pipeline Components",
        question: "What does CI stand for in the context of software development?",
        options: [
          "Code Integration",
          "Continuous Implementation",
          "Continuous Integration",
          "Continuous Improvement"
        ],
        answer: 2,
      },
      {
        section: "CI/CD Pipeline Components",
        question: "What does CD commonly stand for in DevOps? (Select the TWO most common meanings)",
        options: [
          "Continuous Delivery and Continuous Deployment",
          "Code Deployment and Continuous Development",
          "Continuous Documentation and Code Delivery",
          "Code Design and Continuous Debugging"
        ],
        answer: 0,
      },
      {
        section: "CI/CD Pipeline Components",
        question: "Which is NOT typically a stage in a CI/CD pipeline?",
        options: [
          "Build",
          "Test",
          "Customer Approval",
          "Deploy"
        ],
        answer: 2,
      },
      {
        section: "CI/CD Pipeline Components",
        question: "What is the difference between Continuous Delivery and Continuous Deployment?",
        options: [
          "Continuous Delivery automatically deploys all changes to production, while Continuous Deployment requires manual approval",
          "Continuous Delivery ensures code is always in a deployable state but may require manual approval for production, while Continuous Deployment automatically deploys all changes to production",
          "They are different terms for the same concept",
          "Continuous Delivery is for web applications, while Continuous Deployment is for mobile applications"
        ],
        answer: 1,
      },
      {
        section: "CI/CD Pipeline Components",
        question: "Which tool is NOT commonly used for CI/CD pipelines?",
        options: [
          "Jenkins",
          "GitLab CI",
          "Microsoft Word",
          "GitHub Actions"
        ],
        answer: 2,
      },
      {
        section: "CI/CD Pipeline Components",
        question: "What is a 'pipeline as code'?",
        options: [
          "Writing code that creates other code automatically",
          "Defining CI/CD pipeline configurations in version-controlled code rather than in a UI",
          "A method to deploy pipelines directly to production",
          "A technique for debugging pipelines"
        ],
        answer: 1,
      },
      {
        section: "CI/CD Pipeline Components",
        question: "What is the primary purpose of the 'build' stage in a CI pipeline?",
        options: [
          "To compile code and create artifacts",
          "To design the application architecture",
          "To deploy to production",
          "To write new features"
        ],
        answer: 0,
      },
      {
        section: "CI/CD Pipeline Components",
        question: "Which testing type is MOST important to include in a CI pipeline?",
        options: [
          "Manual testing",
          "Automated unit testing",
          "User acceptance testing",
          "Alpha testing"
        ],
        answer: 1,
      },
      {
        section: "CI/CD Pipeline Components",
        question: "Which deployment strategy involves releasing to a small subset of users first?",
        options: [
          "Blue-Green deployment",
          "Canary deployment",
          "Big bang deployment",
          "Rolling deployment"
        ],
        answer: 1,
      },
      {
        section: "CI/CD Pipeline Components",
        question: "What is a key benefit of having a CI/CD pipeline?",
        options: [
          "Eliminating the need for developers",
          "Ensuring code is always tested and in a deployable state",
          "Removing the need for code reviews",
          "Guaranteeing zero bugs in production"
        ],
        answer: 1,
      },
      
      // Section 3: Automation and Tooling
      {
        section: "Automation and Tooling",
        question: "Which tool is typically used for containerization in a CI/CD pipeline?",
        options: [
          "Jenkins",
          "Docker",
          "JUnit",
          "Maven"
        ],
        answer: 1,
      },
      {
        section: "Automation and Tooling",
        question: "What is Kubernetes primarily used for?",
        options: [
          "Automated testing",
          "Source code management",
          "Container orchestration",
          "Database management"
        ],
        answer: 2,
      },
      {
        section: "Automation and Tooling",
        question: "Which type of testing is LEAST likely to be fully automated in a CI/CD pipeline?",
        options: [
          "Unit testing",
          "Integration testing",
          "User experience testing",
          "Security scanning"
        ],
        answer: 2,
      },
      {
        section: "Automation and Tooling",
        question: "What is a webhook in the context of CI/CD?",
        options: [
          "A type of fishing tool used by DevOps engineers",
          "An HTTP callback that triggers actions based on events",
          "A website that hosts CI/CD documentation",
          "A type of automated test"
        ],
        answer: 1,
      },
      {
        section: "Automation and Tooling",
        question: "Which tool would be MOST appropriate for Infrastructure as Code?",
        options: [
          "JUnit",
          "Selenium",
          "Terraform",
          "Postman"
        ],
        answer: 2,
      },
      {
        section: "Automation and Tooling",
        question: "What is configuration drift?",
        options: [
          "The planned migration of configurations from one environment to another",
          "The difference in configuration between developer machines",
          "The unplanned deviation of environment configurations from their intended state",
          "The speed at which configurations are updated"
        ],
        answer: 2,
      },
      {
        section: "Automation and Tooling",
        question: "Which practice helps prevent configuration drift?",
        options: [
          "Manual updates to production servers",
          "Immutable infrastructure",
          "Reducing the frequency of deployments",
          "Eliminating test environments"
        ],
        answer: 1,
      },
      {
        section: "Automation and Tooling",
        question: "What is a primary benefit of using feature flags in CI/CD?",
        options: [
          "They automatically fix bugs in the code",
          "They eliminate the need for testing",
          "They allow features to be deployed but not activated until ready",
          "They improve database performance"
        ],
        answer: 2,
      },
      {
        section: "Automation and Tooling",
        question: "Which tool category is focused on monitoring and observability in a DevOps environment?",
        options: [
          "Version control systems",
          "Compiler tools",
          "APM (Application Performance Monitoring) tools",
          "Code editors"
        ],
        answer: 2,
      },
      {
        section: "Automation and Tooling",
        question: "What is the concept of 'ChatOps' in DevOps?",
        options: [
          "Using chat applications for casual team communication only",
          "Integrating chat platforms with automation tools to execute operations tasks from chat",
          "Replacing all documentation with chat logs",
          "A technique for reducing meeting times"
        ],
        answer: 1,
      },
      {
        section: "Fundamental Concepts",
        question: "What is the primary unit of composition in functional programming?",
        options: [
          "Objects",
          "Classes",
          "Functions",
          "Modules"
        ],
        answer: 2,
      },
      {
        section: "Fundamental Concepts",
        question: "What is the primary unit of composition in object-oriented programming?",
        options: [
          "Functions",
          "Objects",
          "Methods",
          "Procedures"
        ],
        answer: 1,
      },
      {
        section: "Fundamental Concepts",
        question: "Which of the following best describes immutability in functional programming?",
        options: [
          "Data can be modified after creation but only by authorized methods",
          "Data can never be accessed directly",
          "Data cannot be modified after creation; new data is created instead",
          "Data can only be modified by the object that owns it"
        ],
        answer: 2,
      },
      {
        section: "Fundamental Concepts",
        question: "Which concept is NOT a core principle of object-oriented programming?",
        options: [
          "Encapsulation",
          "Inheritance",
          "Immutability",
          "Polymorphism"
        ],
        answer: 2,
      },
      {
        section: "Fundamental Concepts",
        question: "Which concept is NOT a core principle of functional programming?",
        options: [
          "Pure functions",
          "Immutable data",
          "Inheritance",
          "Higher-order functions"
        ],
        answer: 2,
      },
      {
        section: "Fundamental Concepts",
        question: "What is a pure function?",
        options: [
          "A function that only performs I/O operations",
          "A function that returns the same output for the same input and has no side effects",
          "A function that can modify global state",
          "A function that is defined within a class"
        ],
        answer: 1,
      },
      {
        section: "Fundamental Concepts",
        question: "What is encapsulation in OOP?",
        options: [
          "The process of inheriting properties from a parent class",
          "The bundling of data and methods that operate on that data within a single unit",
          "The ability to use different types in the same way",
          "The practice of keeping all variables immutable"
        ],
        answer: 1,
      },
      {
        section: "Fundamental Concepts",
        question: "How does functional programming typically handle state changes?",
        options: [
          "By directly modifying variables",
          "By creating new data structures that represent the new state",
          "By using protected variables within objects",
          "By using static methods to modify state"
        ],
        answer: 1,
      },
      {
        section: "Fundamental Concepts",
        question: "In OOP, what is the relationship between a 'Car' class and a 'Vehicle' class if Car inherits from Vehicle?",
        options: [
          "Car is a subclass of Vehicle",
          "Car has a Vehicle",
          "Vehicle is a subclass of Car",
          "Car and Vehicle are interfaces"
        ],
        answer: 0,
      },
      {
        section: "Fundamental Concepts",
        question: "What is referential transparency in functional programming?",
        options: [
          "The ability to reference any variable from any function",
          "The property that a function can be replaced with its output value without changing program behavior",
          "The ability to access an object's references",
          "The transparency of memory references in the runtime"
        ],
        answer: 1,
      },
      
      // Section 2: Language Features and Implementation
      {
        section: "Language Features and Implementation",
        question: "Which programming language was designed specifically for functional programming?",
        options: [
          "Java",
          "C++",
          "Haskell",
          "Python"
        ],
        answer: 2,
      },
      {
        section: "Language Features and Implementation",
        question: "Which programming language was designed primarily around object-oriented principles?",
        options: [
          "Haskell",
          "Smalltalk",
          "SQL",
          "C"
        ],
        answer: 1,
      },
      {
        section: "Language Features and Implementation",
        question: "What is a higher-order function in functional programming?",
        options: [
          "A function with many parameters",
          "A function that takes functions as arguments or returns functions",
          "A function with high performance",
          "A function that inherits from another function"
        ],
        answer: 1,
      },
      {
        section: "Language Features and Implementation",
        question: "Which feature is more commonly associated with functional programming?",
        options: [
          "Getters and setters",
          "Method overriding",
          "Pattern matching",
          "Protected methods"
        ],
        answer: 2,
      },
      {
        section: "Language Features and Implementation",
        question: "What is polymorphism in OOP?",
        options: [
          "The ability to create multiple objects",
          "The ability to process objects differently based on their data type or class",
          "The ability to hide implementation details",
          "The ability to create immutable objects"
        ],
        answer: 1,
      },
      {
        section: "Language Features and Implementation",
        question: "What feature of functional programming helps with concurrent programming?",
        options: [
          "Dynamic typing",
          "Inheritance",
          "Immutability",
          "Encapsulation"
        ],
        answer: 2,
      },
      {
        section: "Language Features and Implementation",
        question: "In JavaScript, what method is used to create a new array by applying a function to each element without modifying the original array?",
        options: [
          "forEach()",
          "map()",
          "reduce()",
          "splice()"
        ],
        answer: 1,
      },
      {
        section: "Language Features and Implementation",
        question: "Which of the following is a common pattern in functional programming but NOT in OOP?",
        options: [
          "Factory pattern",
          "Observer pattern",
          "Function composition",
          "Strategy pattern"
        ],
        answer: 2,
      },
      {
        section: "Language Features and Implementation",
        question: "What is the primary method of code reuse in OOP?",
        options: [
          "Function composition",
          "Inheritance and composition",
          "Currying",
          "Monads"
        ],
        answer: 1,
      },
      {
        section: "Language Features and Implementation",
        question: "What is a monad in functional programming?",
        options: [
          "A type of inheritance structure",
          "A design pattern for encapsulating data",
          "A way to structure computations with context, sequences, and side effects",
          "A method to override parent class functionality"
        ],
        answer: 2,
      },
      
      // Section 3: Practical Applications and Trade-offs
      {
        section: "Practical Applications and Trade-offs",
        question: "Which paradigm is generally better suited for complex UI state management?",
        options: [
          "Only functional programming",
          "Only object-oriented programming",
          "Either paradigm, but functional programming often provides better predictability",
          "Neither; UI state should be managed with procedural programming"
        ],
        answer: 2,
      },
      {
        section: "Practical Applications and Trade-offs",
        question: "When might OOP be preferred over functional programming?",
        options: [
          "When working with highly concurrent systems",
          "When modeling complex real-world entities with behavior",
          "When mathematical precision is the highest priority",
          "When avoiding side effects is critical"
        ],
        answer: 1,
      },
      {
        section: "Practical Applications and Trade-offs",
        question: "Which statement about testing is generally true?",
        options: [
          "OOP code is always easier to test than functional code",
          "Functional code with pure functions is often easier to test in isolation",
          "Testing is equally difficult in both paradigms",
          "Neither paradigm can be effectively unit tested"
        ],
        answer: 1,
      },
      {
        section: "Practical Applications and Trade-offs",
        question: "Which is a common criticism of OOP?",
        options: [
          "It makes concurrency too simple",
          "It's too mathematical",
          "It can lead to complex inheritance hierarchies that are difficult to understand",
          "It doesn't allow for code reuse"
        ],
        answer: 2,
      },
      {
        section: "Practical Applications and Trade-offs",
        question: "Which is a common criticism of functional programming?",
        options: [
          "It can be difficult for developers to adapt to its mathematical nature",
          "It encourages too many side effects",
          "It requires too much memory allocation",
          "It doesn't allow for abstraction"
        ],
        answer: 0,
      },
      {
        section: "Practical Applications and Trade-offs",
        question: "What is a hybrid approach combining OOP and functional programming called?",
        options: [
          "Procedural programming",
          "Multi-paradigm programming",
          "Dynamic programming",
          "Structured programming"
        ],
        answer: 1,
      },
      {
        section: "Practical Applications and Trade-offs",
        question: "Which modern language supports both OOP and functional programming approaches?",
        options: [
          "C",
          "Scala",
          "COBOL",
          "Assembly"
        ],
        answer: 1,
      },
      {
        section: "Practical Applications and Trade-offs",
        question: "In which scenario would you likely prefer functional programming?",
        options: [
          "Building a GUI application with complex user interactions",
          "Implementing a data processing pipeline with transformations",
          "Designing a system with complex inheritance relationships",
          "Creating a simulation with mutable state"
        ],
        answer: 1,
      },
      {
        section: "Practical Applications and Trade-offs",
        question: "How do functional and OOP paradigms typically differ in handling errors?",
        options: [
          "OOP uses return values, while functional programming uses exceptions",
          "Functional programming often uses monadic types like Maybe/Option or Either/Result, while OOP typically uses exceptions",
          "OOP doesn't have error handling, while functional programming does",
          "Both handle errors identically"
        ],
        answer: 1,
      },
      {
        section: "Practical Applications and Trade-offs",
        question: "Which statement best describes the current industry trend regarding functional and OOP paradigms?",
        options: [
          "OOP is being completely abandoned in favor of functional programming",
          "Functional programming is rarely used in production systems",
          "There's a trend toward incorporating functional concepts even in traditionally OOP languages",
          "The two paradigms are used in completely separate domains with no overlap"
        ],
        answer: 2,
      },
      {
        section: "Advanced Design Patterns",
        question: "What does CQRS stand for?",
        options: [
            "Command Query Responsibility Segregation",
            "Command Query Request Separation",
            "Centralized Query and Request System",
            "Command Query Resource Segregation"
        ],
        answer: 0,
    },
    {
        section: "Advanced Design Patterns",
        question: "What is the primary purpose of CQRS?",
        options: [
            "To combine read and write operations into a single model",
            "To separate read and write operations into different models",
            "To eliminate the need for databases",
            "To simplify monolithic architectures"
        ],
        answer: 1,
    },
    {
        section: "Advanced Design Patterns",
        question: "Which of the following is a benefit of CQRS?",
        options: [
            "Simplified data consistency",
            "Improved scalability for read and write operations",
            "Reduced need for event sourcing",
            "Tight coupling of components"
        ],
        answer: 1,
    },
    {
        section: "Advanced Design Patterns",
        question: "What is Event Sourcing?",
        options: [
            "Storing only the current state of an application",
            "Storing a sequence of events that represent state changes",
            "Eliminating the need for databases",
            "Using a single model for read and write operations"
        ],
        answer: 1,
    },
    {
        section: "Advanced Design Patterns",
        question: "Which of the following is a key benefit of Event Sourcing?",
        options: [
            "Simplified debugging and auditing",
            "Reduced need for CQRS",
            "Tight coupling of components",
            "Limited scalability"
        ],
        answer: 0,
    },
    {
        section: "Advanced Design Patterns",
        question: "What is the primary challenge of implementing Event Sourcing?",
        options: [
            "Increased complexity of event storage and replay",
            "Reduced scalability",
            "Tight coupling of components",
            "Simplified debugging"
        ],
        answer: 0,
    },
    {
        section: "Advanced Design Patterns",
        question: "What is Dependency Injection (DI)?",
        options: [
            "A design pattern that promotes tight coupling",
            "A technique for passing dependencies to a class rather than creating them internally",
            "A method for combining read and write operations",
            "A way to eliminate the need for databases"
        ],
        answer: 1,
    },
    {
        section: "Advanced Design Patterns",
        question: "Which of the following is a benefit of Dependency Injection?",
        options: [
            "Tight coupling of components",
            "Improved testability and maintainability",
            "Reduced need for CQRS",
            "Simplified event sourcing"
        ],
        answer: 1,
    },
    {
        section: "Advanced Design Patterns",
        question: "Which of the following is a real-world application of CQRS?",
        options: [
            "E-commerce platforms with separate read and write models",
            "Static websites",
            "Monolithic legacy systems",
            "Batch processing systems"
        ],
        answer: 0,
    },
    {
        section: "Advanced Design Patterns",
        question: "Which of the following is a real-world application of Event Sourcing?",
        options: [
            "Financial systems for auditing and transaction history",
            "Static websites",
            "Monolithic legacy systems",
            "Batch processing systems"
        ],
        answer: 0,
    },
    {
        section: "Advanced Design Patterns",
        question: "Which of the following is a real-world application of Dependency Injection?",
        options: [
            "Enterprise applications with modular and testable components",
            "Static websites",
            "Monolithic legacy systems",
            "Batch processing systems"
        ],
        answer: 0,
    },
    {
        section: "Advanced Design Patterns",
        question: "What is the primary purpose of a Command in CQRS?",
        options: [
            "To query data",
            "To perform write operations",
            "To store events",
            "To eliminate the need for databases"
        ],
        answer: 1,
    },
    {
        section: "Advanced Design Patterns",
        question: "What is the primary purpose of a Query in CQRS?",
        options: [
            "To perform write operations",
            "To retrieve data",
            "To store events",
            "To eliminate the need for databases"
        ],
        answer: 1,
    },
    {
        section: "Advanced Design Patterns",
        question: "Which of the following is a key challenge of CQRS?",
        options: [
            "Increased complexity of managing separate models",
            "Reduced scalability",
            "Tight coupling of components",
            "Simplified debugging"
        ],
        answer: 0,
    },
    {
        section: "Advanced Design Patterns",
        question: "What is the primary benefit of using Event Sourcing with CQRS?",
        options: [
            "Improved scalability for read operations",
            "Simplified data consistency",
            "Tight coupling of components",
            "Reduced need for Dependency Injection"
        ],
        answer: 1,
    },
    {
        section: "Advanced Design Patterns",
        question: "Which of the following is a common use case for Dependency Injection?",
        options: [
            "Enterprise applications with modular components",
            "Static websites",
            "Monolithic legacy systems",
            "Batch processing systems"
        ],
        answer: 0,
    },
    {
        section: "Advanced Design Patterns",
        question: "What is the primary purpose of an Event Store in Event Sourcing?",
        options: [
            "To store only the current state of an application",
            "To store a sequence of events representing state changes",
            "To eliminate the need for databases",
            "To combine read and write operations"
        ],
        answer: 1,
    },
    {
        section: "Advanced Design Patterns",
        question: "Which of the following is a key benefit of using Dependency Injection in testing?",
        options: [
            "Tight coupling of components",
            "Improved testability through mock dependencies",
            "Reduced need for CQRS",
            "Simplified event sourcing"
        ],
        answer: 1,
    },
    {
        section: "Advanced Design Patterns",
        question: "Which of the following is a key characteristic of CQRS?",
        options: [
            "Combining read and write operations into a single model",
            "Separating read and write operations into different models",
            "Eliminating the need for databases",
            "Simplifying monolithic architectures"
        ],
        answer: 1,
    },
    {
        section: "Advanced Design Patterns",
        question: "Which of the following is a key characteristic of Event Sourcing?",
        options: [
            "Storing only the current state of an application",
            "Storing a sequence of events representing state changes",
            "Eliminating the need for databases",
            "Using a single model for read and write operations"
        ],
        answer: 1,
    },
    {
        section: "Advanced Design Patterns",
        question: "Which of the following is a key characteristic of Dependency Injection?",
        options: [
            "Tight coupling of components",
            "Passing dependencies to a class rather than creating them internally",
            "Combining read and write operations",
            "Eliminating the need for databases"
        ],
        answer: 1,
    },
    {
        section: "Advanced Design Patterns",
        question: "Which of the following is a common tool for implementing Dependency Injection?",
        options: [
            "Spring Framework",
            "Apache Kafka",
            "Docker",
            "Kubernetes"
        ],
        answer: 0,
    },
    {
        section: "Advanced Design Patterns",
        question: "Which of the following is a common tool for implementing Event Sourcing?",
        options: [
            "Apache Kafka",
            "Spring Framework",
            "Docker",
            "Kubernetes"
        ],
        answer: 0,
    },
    {
        section: "Advanced Design Patterns",
        question: "Which of the following is a common tool for implementing CQRS?",
        options: [
            "Axon Framework",
            "Spring Framework",
            "Docker",
            "Kubernetes"
        ],
        answer: 0,
    },
    {
        section: "Advanced Design Patterns",
        question: "What is the primary purpose of a Command Handler in CQRS?",
        options: [
            "To query data",
            "To handle write operations",
            "To store events",
            "To eliminate the need for databases"
        ],
        answer: 1,
    },
    {
        section: "Advanced Design Patterns",
        question: "What is the primary purpose of a Query Handler in CQRS?",
        options: [
            "To perform write operations",
            "To retrieve data",
            "To store events",
            "To eliminate the need for databases"
        ],
        answer: 1,
    },
    {
        section: "Advanced Design Patterns",
        question: "Which of the following is a key benefit of using CQRS with Event Sourcing?",
        options: [
            "Improved scalability for read operations",
            "Simplified data consistency",
            "Tight coupling of components",
            "Reduced need for Dependency Injection"
        ],
        answer: 1,
    },
    {
        section: "Advanced Design Patterns",
        question: "Which of the following is a key challenge of Dependency Injection?",
        options: [
            "Increased complexity of managing dependencies",
            "Reduced scalability",
            "Tight coupling of components",
            "Simplified debugging"
        ],
        answer: 0,
    },
    {
        section: "Advanced Design Patterns",
        question: "Which of the following is a key benefit of using Event Sourcing in financial systems?",
        options: [
            "Improved auditing and transaction history",
            "Reduced need for CQRS",
            "Tight coupling of components",
            "Simplified debugging"
        ],
        answer: 0,
    },
    {
        section: "AI & Machine Learning in Development",
        question: "Which of the following is a key benefit of using AI in software development?",
        options: [
            "Increased manual debugging efforts",
            "Automated code generation and optimization",
            "Higher development costs",
            "Slower software deployment"
        ],
        answer: 1,
    },
    {
        section: "AI & Machine Learning in Development",
        question: "Which AI-driven tool is widely used for automated code generation?",
        options: [
            "GitHub Copilot",
            "Docker",
            "Postman",
            "Kubernetes"
        ],
        answer: 0,
    },
    {
        section: "AI & Machine Learning in Development",
        question: "How does AI assist in debugging code?",
        options: [
            "By manually reviewing every line of code",
            "By analyzing error logs and suggesting fixes",
            "By requiring developers to debug manually",
            "By removing all errors automatically"
        ],
        answer: 1,
    },
    {
        section: "AI & Machine Learning in Development",
        question: "Which of the following is an example of an AI-powered bug detection tool?",
        options: [
            "SonarQube",
            "TensorFlow",
            "PostgreSQL",
            "React"
        ],
        answer: 0,
    },
    {
        section: "AI & Machine Learning in Development",
        question: "Which machine learning technique is commonly used for anomaly detection in software logs?",
        options: [
            "Supervised Learning",
            "Unsupervised Learning",
            "Reinforcement Learning",
            "Deep Learning"
        ],
        answer: 1,
    },
    {
        section: "AI & Machine Learning in Development",
        question: "What is the role of Natural Language Processing (NLP) in AI-powered coding assistants?",
        options: [
            "Recognizing programming patterns and improving suggestions",
            "Translating spoken language into machine code",
            "Optimizing network latency",
            "Managing cloud infrastructure"
        ],
        answer: 0,
    },
    {
        section: "AI & Machine Learning in Development",
        question: "Which AI model is commonly used in AI-powered code generation tools?",
        options: [
            "GPT (Generative Pre-trained Transformer)",
            "RNN (Recurrent Neural Network)",
            "CNN (Convolutional Neural Network)",
            "Naïve Bayes"
        ],
        answer: 0,
    },
    {
        section: "AI & Machine Learning in Development",
        question: "How does AI improve software performance optimization?",
        options: [
            "By analyzing runtime behavior and suggesting optimizations",
            "By increasing CPU load",
            "By removing functions from the code",
            "By slowing down execution to detect errors"
        ],
        answer: 0,
    },
    {
        section: "AI & Machine Learning in Development",
        question: "Which AI technique is used for predictive software maintenance?",
        options: [
            "Regression Analysis",
            "Clustering",
            "Genetic Algorithms",
            "Bayesian Networks"
        ],
        answer: 0,
    },
    {
        section: "AI & Machine Learning in Development",
        question: "What is the main function of AI-driven test automation?",
        options: [
            "Generating and executing test cases automatically",
            "Manually reviewing test cases",
            "Replacing all manual testing efforts",
            "Writing code for developers"
        ],
        answer: 0,
    },
    {
        section: "AI & Machine Learning in Development",
        question: "Which of these is NOT an AI-powered coding assistant?",
        options: [
            "GitHub Copilot",
            "Tabnine",
            "Jira",
            "Amazon CodeWhisperer"
        ],
        answer: 2,
    },
    {
        section: "AI & Machine Learning in Development",
        question: "What is an advantage of using AI for software documentation?",
        options: [
            "It generates documentation automatically",
            "It replaces human developers",
            "It requires no input from developers",
            "It slows down software development"
        ],
        answer: 0,
    },
    {
        section: "AI & Machine Learning in Development",
        question: "Which AI-powered tool helps with automatic code refactoring?",
        options: [
            "Refact.ai",
            "ChatGPT",
            "AWS Lambda",
            "Docker"
        ],
        answer: 0,
    },
    {
        section: "AI & Machine Learning in Development",
        question: "What type of learning is used in AI-driven software testing?",
        options: [
            "Supervised Learning",
            "Unsupervised Learning",
            "Reinforcement Learning",
            "All of the above"
        ],
        answer: 3,
    },
    {
        section: "AI & Machine Learning in Development",
        question: "Which of the following best describes AI’s role in software performance monitoring?",
        options: [
            "Predicting potential system failures",
            "Increasing execution time",
            "Slowing down data processing",
            "Removing functions from code"
        ],
        answer: 0,
    },
    {
        section: "AI & Machine Learning in Development",
        question: "What is a key benefit of AI in continuous integration and deployment (CI/CD)?",
        options: [
            "Automated quality checks and faster releases",
            "Manual code review",
            "Delaying software delivery",
            "Replacing DevOps engineers"
        ],
        answer: 0,
    },
    {
        section: "AI & Machine Learning in Development",
        question: "Which of the following describes 'AI-driven pair programming'?",
        options: [
            "An AI system assists a developer by suggesting and completing code",
            "Developers work in pairs without AI assistance",
            "An AI that writes full applications independently",
            "A method where developers write code on different files"
        ],
        answer: 0,
    },
    {
        section: "AI & Machine Learning in Development",
        question: "How does AI improve code review processes?",
        options: [
            "By automatically identifying security vulnerabilities and bugs",
            "By requiring only manual review",
            "By replacing human developers",
            "By skipping security analysis"
        ],
        answer: 0,
    },
    {
        section: "AI & Machine Learning in Development",
        question: "Which AI-based tool can be used for automated API testing?",
        options: [
            "Postman AI",
            "GraphQL",
            "Selenium",
            "JMeter AI"
        ],
        answer: 0,
    },
    {
        section: "AI & Machine Learning in Development",
        question: "What is one risk associated with AI-generated code?",
        options: [
            "AI can introduce security vulnerabilities",
            "AI eliminates the need for software developers",
            "AI makes all code perfect",
            "AI cannot write any code"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "What is the primary goal of Secure Software Development Lifecycle (SSDLC)?",
        options: [
            "To embed security at every stage of software development",
            "To reduce development costs",
            "To focus only on penetration testing",
            "To delay software releases for security audits"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "Which phase of SSDLC involves identifying security requirements?",
        options: [
            "Design phase",
            "Requirement analysis phase",
            "Testing phase",
            "Deployment phase"
        ],
        answer: 1,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "Threat modeling is typically performed during which phase of SSDLC?",
        options: [
            "Requirement analysis phase",
            "Design phase",
            "Implementation phase",
            "Maintenance phase"
        ],
        answer: 1,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "What does STRIDE stand for in threat modeling?",
        options: [
            "Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege",
            "Security, Tampering, Recovery, Integrity, Data Protection, Execution",
            "Structure, Testing, Redundancy, Information Security, Detection, Encryption",
            "Software, Tracking, Risk, Implementation, Detection, Evaluation"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "Which phase of SSDLC focuses on secure coding practices?",
        options: [
            "Implementation phase",
            "Testing phase",
            "Deployment phase",
            "Requirement analysis phase"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "What is a key security best practice during the implementation phase?",
        options: [
            "Using strong authentication and authorization mechanisms",
            "Ignoring security vulnerabilities",
            "Delaying security reviews",
            "Skipping peer code reviews"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "Which of the following helps prevent SQL injection attacks?",
        options: [
            "Using prepared statements and parameterized queries",
            "Allowing direct SQL input from users",
            "Using complex database queries",
            "Disabling database logging"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "Static Application Security Testing (SAST) is typically performed during which SSDLC phase?",
        options: [
            "Implementation phase",
            "Design phase",
            "Testing phase",
            "Deployment phase"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "What is the purpose of Dynamic Application Security Testing (DAST)?",
        options: [
            "To test security vulnerabilities while the application is running",
            "To analyze code without executing it",
            "To scan only backend services",
            "To enforce stricter firewall rules"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "Which tool is commonly used for DAST?",
        options: [
            "Burp Suite",
            "SonarQube",
            "GitHub Copilot",
            "Docker"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "Why is security testing essential in SSDLC?",
        options: [
            "To identify vulnerabilities before deployment",
            "To increase development costs",
            "To replace manual testing",
            "To eliminate the need for developers"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "Which phase of SSDLC ensures secure deployment of applications?",
        options: [
            "Deployment phase",
            "Testing phase",
            "Design phase",
            "Requirement analysis phase"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "What is a key security practice in the deployment phase?",
        options: [
            "Using automated security monitoring",
            "Disabling firewalls",
            "Allowing unrestricted admin access",
            "Ignoring security updates"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "Which security principle suggests granting users only the permissions they need?",
        options: [
            "Principle of Least Privilege",
            "Principle of Maximum Access",
            "Open Access Policy",
            "Full Administrator Control"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "What is a major advantage of integrating SSDLC into development?",
        options: [
            "Identifying and fixing security flaws early",
            "Delaying security testing until production",
            "Ignoring security policies",
            "Removing security teams from the process"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "What is the role of penetration testing in SSDLC?",
        options: [
            "Simulating real-world attacks to identify vulnerabilities",
            "Replacing the need for code reviews",
            "Automatically fixing all security issues",
            "Eliminating the need for encryption"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "Which security standard is commonly used for web application security?",
        options: [
            "OWASP Top 10",
            "ISO 9001",
            "TCP/IP",
            "GDPR"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "Which of the following is a major cause of security vulnerabilities?",
        options: [
            "Poor coding practices",
            "Strict authentication policies",
            "Frequent security audits",
            "Secure password storage"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "Why is continuous monitoring important in SSDLC?",
        options: [
            "To detect security threats in real time",
            "To slow down software development",
            "To ignore compliance requirements",
            "To allow unrestricted access to users"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "Which phase of SSDLC involves regular security updates and patches?",
        options: [
            "Maintenance phase",
            "Requirement analysis phase",
            "Testing phase",
            "Design phase"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "What is a key security measure in the requirement analysis phase?",
        options: [
            "Defining security requirements early",
            "Skipping security assessments",
            "Focusing only on performance optimization",
            "Avoiding documentation"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "Which of the following security practices is essential in the design phase?",
        options: [
            "Threat modeling",
            "Skipping architecture reviews",
            "Delaying security decisions",
            "Avoiding documentation"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "Which of the following is an example of an insecure coding practice?",
        options: [
            "Hardcoding sensitive credentials",
            "Using secure authentication mechanisms",
            "Applying input validation",
            "Implementing strong encryption"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "Which principle focuses on ensuring that security mechanisms are simple and small?",
        options: [
            "Economy of Mechanism",
            "Fail-Secure",
            "Defense in Depth",
            "Open Design"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "What is a security best practice when handling user passwords?",
        options: [
            "Hashing and salting passwords",
            "Storing passwords in plain text",
            "Using weak passwords for convenience",
            "Allowing unlimited login attempts"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "Which security concept ensures that even if one security control fails, additional layers of security exist?",
        options: [
            "Defense in Depth",
            "Zero Trust",
            "Single Point of Failure",
            "Implicit Trust"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "Which of the following security threats does input validation help prevent?",
        options: [
            "Cross-Site Scripting (XSS)",
            "Phishing",
            "Denial of Service (DoS)",
            "Social Engineering"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "Why is logging and monitoring important in secure development?",
        options: [
            "To detect and respond to security incidents",
            "To replace security testing",
            "To slow down performance",
            "To remove the need for audits"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "What is the best approach for managing third-party dependencies securely?",
        options: [
            "Regularly updating and auditing dependencies",
            "Using outdated versions",
            "Ignoring security advisories",
            "Allowing unrestricted access to third-party components"
        ],
        answer: 0,
    },
    {
        section: "Secure Software Development Lifecycle (SSDLC)",
        question: "Which security framework provides guidelines for secure software development?",
        options: [
            "NIST Secure Software Development Framework (SSDF)",
            "ISO 9001",
            "GDPR",
            "IEEE 802.11"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "What is technical debt in software development?",
        options: [
            "The cost of additional rework caused by choosing a quick but limited solution",
            "A financial loan taken for software development",
            "The cost of software licenses",
            "The time taken to develop software"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "Which of the following is NOT a common cause of technical debt?",
        options: [
            "Rushed development timelines",
            "Poor code quality",
            "Refactoring old code",
            "Lack of documentation"
        ],
        answer: 2,
    },
    {
        section: "Technical Debt Management",
        question: "Which of the following best describes the impact of technical debt?",
        options: [
            "Increases future maintenance costs",
            "Improves code readability",
            "Speeds up long-term development",
            "Reduces system complexity"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "What is the best strategy to reduce technical debt?",
        options: [
            "Refactoring code regularly",
            "Ignoring old code",
            "Avoiding writing tests",
            "Continuously adding new features"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "Which of the following tools can help identify technical debt in a codebase?",
        options: [
            "SonarQube",
            "Photoshop",
            "Excel",
            "Trello"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "What is the role of automated testing in technical debt management?",
        options: [
            "Prevents new defects and ensures stability",
            "Makes development slower",
            "Replaces the need for developers",
            "Eliminates all bugs"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "What is a common consequence of ignoring technical debt?",
        options: [
            "Increased software complexity and maintenance cost",
            "Improved system performance",
            "Faster feature development",
            "Better user experience"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "Which of these is a best practice for managing technical debt?",
        options: [
            "Prioritizing debt repayment in the development cycle",
            "Completely stopping feature development",
            "Ignoring legacy code",
            "Only addressing debt during major releases"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "Which of the following is NOT an example of technical debt?",
        options: [
            "Code that lacks proper documentation",
            "Unoptimized database queries",
            "A well-structured and tested software module",
            "Outdated dependencies in a project"
        ],
        answer: 2,
    },
    {
        section: "Technical Debt Management",
        question: "Which refactoring technique involves breaking down a large function into smaller, more manageable pieces?",
        options: [
            "Extract Method",
            "Big Bang Rewriting",
            "Feature Creep",
            "Code Duplication"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "What does 'code smell' refer to?",
        options: [
            "A sign of deeper problems in the code",
            "A feature request from users",
            "A well-optimized code segment",
            "An external library"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "How can continuous integration (CI) help manage technical debt?",
        options: [
            "By catching code issues early through automated testing",
            "By preventing developers from writing new code",
            "By reducing documentation efforts",
            "By eliminating all runtime errors"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "Which of the following is an example of intentional technical debt?",
        options: [
            "Choosing a temporary quick fix to meet a deadline",
            "Accidentally introducing security vulnerabilities",
            "Using outdated technology due to lack of awareness",
            "Ignoring performance issues"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "Which of the following is NOT a common symptom of high technical debt?",
        options: [
            "Frequent system crashes",
            "Difficult code maintenance",
            "Fast development with no issues",
            "Inconsistent code quality"
        ],
        answer: 2,
    },
    {
        section: "Technical Debt Management",
        question: "What is the main purpose of refactoring?",
        options: [
            "To improve code readability and maintainability",
            "To delete unnecessary files",
            "To rewrite the entire software from scratch",
            "To add new features quickly"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "Which strategy helps track and manage technical debt over time?",
        options: [
            "Maintaining a technical debt backlog",
            "Ignoring technical debt issues",
            "Delaying refactoring indefinitely",
            "Only reviewing code before product launch"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "Which type of technical debt arises due to poorly understood requirements?",
        options: [
            "Requirement debt",
            "Code debt",
            "Design debt",
            "Architecture debt"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "What is the 'big bang rewrite' approach?",
        options: [
            "Rewriting the entire system from scratch",
            "Gradually refactoring code in small steps",
            "Ignoring technical debt",
            "Only fixing visible bugs"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "Which of the following is NOT a recommended approach to managing technical debt?",
        options: [
            "Proactively addressing technical debt",
            "Regular code reviews",
            "Ignoring debt until it becomes critical",
            "Automated testing"
        ],
        answer: 2,
    },
    {
        section: "Technical Debt Management",
        question: "Which of these tools helps track code quality and technical debt?",
        options: [
            "SonarQube",
            "PowerPoint",
            "Google Docs",
            "Slack"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "What is the risk of excessive technical debt?",
        options: [
            "Reduced development speed and increased maintenance costs",
            "Faster project completion",
            "Easier code maintenance",
            "Improved software security"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "Which process focuses on continuously improving code without altering functionality?",
        options: [
            "Refactoring",
            "Feature development",
            "Version control",
            "Debugging"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "What is technical debt in software development?",
        options: [
            "The cost of additional rework caused by choosing a quick but limited solution",
            "A financial loan taken for software development",
            "The cost of software licenses",
            "The time taken to develop software"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "Which of the following is NOT a common cause of technical debt?",
        options: [
            "Rushed development timelines",
            "Poor code quality",
            "Refactoring old code",
            "Lack of documentation"
        ],
        answer: 2,
    },
    {
        section: "Technical Debt Management",
        question: "What is a primary impact of technical debt?",
        options: [
            "Increased future maintenance costs",
            "Improved code readability",
            "Speeds up long-term development",
            "Reduces system complexity"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "Which of these is an effective strategy to reduce technical debt?",
        options: [
            "Refactoring code regularly",
            "Ignoring old code",
            "Avoiding writing tests",
            "Continuously adding new features"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "Which tool helps identify technical debt in a codebase?",
        options: [
            "SonarQube",
            "Photoshop",
            "Excel",
            "Trello"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "How does automated testing help in managing technical debt?",
        options: [
            "Prevents new defects and ensures stability",
            "Makes development slower",
            "Replaces the need for developers",
            "Eliminates all bugs"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "What happens if technical debt is ignored?",
        options: [
            "Increased software complexity and maintenance cost",
            "Improved system performance",
            "Faster feature development",
            "Better user experience"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "Which approach is best for managing technical debt?",
        options: [
            "Prioritizing debt repayment in the development cycle",
            "Completely stopping feature development",
            "Ignoring legacy code",
            "Only addressing debt during major releases"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "Which of these is NOT an example of technical debt?",
        options: [
            "Code that lacks proper documentation",
            "Unoptimized database queries",
            "A well-structured and tested software module",
            "Outdated dependencies in a project"
        ],
        answer: 2,
    },
    {
        section: "Technical Debt Management",
        question: "What is the purpose of refactoring?",
        options: [
            "To improve code readability and maintainability",
            "To delete unnecessary files",
            "To rewrite the entire software from scratch",
            "To add new features quickly"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "What does 'code smell' indicate?",
        options: [
            "A sign of deeper problems in the code",
            "A feature request from users",
            "A well-optimized code segment",
            "An external library"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "How does continuous integration (CI) help with technical debt?",
        options: [
            "By catching code issues early through automated testing",
            "By preventing developers from writing new code",
            "By reducing documentation efforts",
            "By eliminating all runtime errors"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "Which of these is an example of intentional technical debt?",
        options: [
            "Choosing a temporary quick fix to meet a deadline",
            "Accidentally introducing security vulnerabilities",
            "Using outdated technology due to lack of awareness",
            "Ignoring performance issues"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "What is a common symptom of high technical debt?",
        options: [
            "Frequent system crashes",
            "Difficult code maintenance",
            "Inconsistent code quality",
            "All of the above"
        ],
        answer: 3,
    },
    {
        section: "Technical Debt Management",
        question: "What does 'big bang rewrite' mean?",
        options: [
            "Rewriting the entire system from scratch",
            "Gradually refactoring code in small steps",
            "Ignoring technical debt",
            "Only fixing visible bugs"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "Which approach is NOT recommended for managing technical debt?",
        options: [
            "Proactively addressing technical debt",
            "Regular code reviews",
            "Ignoring debt until it becomes critical",
            "Automated testing"
        ],
        answer: 2,
    },
    {
        section: "Technical Debt Management",
        question: "Which tool can track technical debt over time?",
        options: [
            "SonarQube",
            "PowerPoint",
            "Google Docs",
            "Slack"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "How does technical debt affect software maintainability?",
        options: [
            "Makes it harder to modify and update the software",
            "Improves system flexibility",
            "Reduces debugging time",
            "Enhances overall software performance"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "Which practice helps track and manage technical debt?",
        options: [
            "Maintaining a technical debt backlog",
            "Ignoring technical debt issues",
            "Delaying refactoring indefinitely",
            "Only reviewing code before product launch"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "What is the role of documentation in technical debt management?",
        options: [
            "Helps developers understand code structure and decisions",
            "Slows down development",
            "Increases the complexity of the codebase",
            "Replaces the need for refactoring"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "Which of these is a sign that technical debt is out of control?",
        options: [
            "Developers avoid modifying certain parts of the code",
            "Code changes require extensive debugging",
            "New features take longer to implement",
            "All of the above"
        ],
        answer: 3,
    },
    {
        section: "Technical Debt Management",
        question: "What is a major consequence of high technical debt?",
        options: [
            "Increased software complexity and maintenance cost",
            "Faster software updates",
            "Simpler debugging",
            "Reduced need for code reviews"
        ],
        answer: 0,
    },
    {
        section: "Technical Debt Management",
        question: "Which of these best describes refactoring?",
        options: [
            "Improving code without changing its functionality",
            "Adding new features to software",
            "Fixing all software bugs",
            "Eliminating unit tests"
        ],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "What is a cloud-native application?",
        options: ["An app built specifically to run in cloud environments", "Any app that uses the internet", "An app that runs only on-premises", "An application that doesn’t require cloud services"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "Which technology is commonly used for container orchestration?",
        options: ["Kubernetes", "Docker", "Terraform", "Ansible"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "What is the primary role of Docker in cloud-native applications?",
        options: ["Containerization", "Networking", "Load balancing", "Authentication"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "Which of the following is a key benefit of cloud-native applications?",
        options: ["Scalability", "High latency", "Tightly coupled architecture", "Single point of failure"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "What is Kubernetes used for?",
        options: ["Managing containerized applications", "Creating virtual machines", "Developing mobile apps", "Monitoring hardware components"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "Which cloud-native principle ensures an application remains available despite failures?",
        options: ["Resilience", "Monolithic architecture", "Single server dependency", "Manual scaling"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "Which of the following is NOT a cloud-native design pattern?",
        options: ["Monolithic application", "Microservices", "Service Mesh", "Sidecar pattern"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "What is a microservices architecture?",
        options: ["An approach where applications are composed of small, independent services", "A single large codebase", "A method of designing desktop applications", "A system where services depend on a central database"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "Which component of Kubernetes is responsible for scheduling workloads?",
        options: ["Kube-scheduler", "Kubelet", "Pod", "Service"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "What does a Kubernetes pod represent?",
        options: ["A group of one or more containers", "A physical server", "A virtual machine", "A cloud storage bucket"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "What is a key advantage of using containers?",
        options: ["Portability", "Slower deployment", "Tied to a specific cloud provider", "Requires a dedicated physical server"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "Which service in Kubernetes exposes applications to external traffic?",
        options: ["Ingress", "ConfigMap", "Persistent Volume", "ClusterRole"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "What is a common cloud-native monitoring tool?",
        options: ["Prometheus", "Microsoft Word", "Photoshop", "Excel"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "Which cloud model provides the highest level of user control?",
        options: ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)", "Software as a Service (SaaS)", "Function as a Service (FaaS)"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "What is a major benefit of using cloud-native applications?",
        options: ["Automatic scalability", "Higher operational costs", "Fixed hardware requirements", "Complex deployment process"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "Which Kubernetes component maintains cluster state?",
        options: ["etcd", "Kubelet", "Pod", "Deployment"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "What is a service mesh used for in cloud-native applications?",
        options: ["Managing service-to-service communication", "Building mobile apps", "Storing large files", "Creating virtual machines"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "Which cloud-native pattern handles failures automatically?",
        options: ["Circuit Breaker", "Singleton", "Observer", "Monolithic"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "What does a Kubernetes deployment do?",
        options: ["Manages replica sets and rolling updates", "Controls network traffic", "Creates storage volumes", "Encrypts application data"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "Which tool is used for infrastructure as code in cloud-native environments?",
        options: ["Terraform", "Docker", "MongoDB", "Kubernetes"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "Which type of cloud-native service executes code without managing infrastructure?",
        options: ["Serverless computing", "Virtual Machines", "Dedicated servers", "Bare-metal hosting"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "What is the primary benefit of using a container registry?",
        options: ["Stores and distributes container images", "Creates virtual networks", "Hosts web applications", "Manages user authentication"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "Which of the following is NOT a cloud-native storage solution?",
        options: ["Hard disk drives", "Object storage", "Persistent volumes", "Cloud databases"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "Which cloud-native component ensures traffic is routed dynamically?",
        options: ["Service mesh", "Cron job", "Volume claim", "ConfigMap"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "Which platform provides managed Kubernetes services?",
        options: ["Google Kubernetes Engine (GKE)", "Microsoft Word", "Facebook", "Adobe Photoshop"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "What is a key challenge of cloud-native applications?",
        options: ["Managing distributed systems", "Limited scalability", "Inflexibility", "Slower deployment"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "Which practice helps ensure high availability in cloud-native applications?",
        options: ["Load balancing", "Running all services on a single server", "Hardcoding configurations", "Ignoring system monitoring"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "What is horizontal scaling?",
        options: ["Adding more instances of a service", "Increasing CPU on a single server", "Using one large monolithic service", "Reducing network capacity"],
        answer: 0,
    },
    {
        section: "Cloud-Native Applications",
        question: "What is the main function of a Kubernetes namespace?",
        options: ["Organizing resources within a cluster", "Exposing services to external traffic", "Handling authentication", "Managing service discovery"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "What is Hadoop primarily used for?",
        options: ["Distributed data processing", "Cloud storage", "Relational database management", "Virtual machine hosting"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "Which component of Hadoop is responsible for distributed storage?",
        options: ["HDFS", "MapReduce", "YARN", "Hive"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "Which of the following is a real-time data processing framework?",
        options: ["Apache Flink", "Hadoop MapReduce", "Cassandra", "MongoDB"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "Which programming languages are commonly used with Apache Spark?",
        options: ["Scala, Python, Java", "C, C++, PHP", "Ruby, Perl, Go", "Swift, Kotlin, R"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "What is the main function of YARN in Hadoop?",
        options: ["Resource management", "Data storage", "Batch processing", "Real-time analytics"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "Which component in Spark is responsible for fault tolerance and scheduling?",
        options: ["Spark Driver", "RDD", "YARN", "HDFS"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "What is the main advantage of Apache Flink over Apache Spark?",
        options: ["True real-time stream processing", "Better batch processing", "Higher latency", "Tightly coupled architecture"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "Which big data framework is best suited for batch processing?",
        options: ["Hadoop MapReduce", "Apache Flink", "Kafka Streams", "Flink CEP"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "What is the purpose of Apache Hive in the Hadoop ecosystem?",
        options: ["SQL-like querying of big data", "Data visualization", "Container orchestration", "Machine learning model deployment"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "Which component of Spark is responsible for storing intermediate data?",
        options: ["RDD", "DataFrame", "Kafka", "HDFS"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "Which tool is used for real-time data streaming in Apache Spark?",
        options: ["Spark Streaming", "MapReduce", "Pig", "HDFS"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "Which of the following is an example of a NoSQL database used in big data?",
        options: ["Cassandra", "MySQL", "PostgreSQL", "SQLite"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "Which framework is commonly used for distributed machine learning on big data?",
        options: ["Apache Mahout", "Flask", "React", "Pandas"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "Which big data framework allows processing of both batch and stream data?",
        options: ["Apache Spark", "Hadoop MapReduce", "PostgreSQL", "MongoDB"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "What does RDD stand for in Spark?",
        options: ["Resilient Distributed Dataset", "Random Data Distribution", "Real-time Data Driver", "Remote Data Dump"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "Which framework is best suited for low-latency streaming data processing?",
        options: ["Apache Flink", "Hadoop", "Apache Spark (Batch)", "Hive"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "Which storage format is optimized for analytical queries in big data?",
        options: ["Parquet", "CSV", "JSON", "TXT"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "Which component of Hadoop is responsible for parallel computation?",
        options: ["MapReduce", "Hive", "HDFS", "Pig"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "Which framework is used for event-driven stream processing?",
        options: ["Kafka Streams", "Hadoop", "Hive", "HBase"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "Which of the following is NOT a big data processing framework?",
        options: ["Docker", "Apache Spark", "Apache Flink", "Hadoop"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "What is the role of Apache Kafka in big data processing?",
        options: ["Messaging and event streaming", "Batch processing", "Data visualization", "SQL query execution"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "Which data format is best suited for big data storage?",
        options: ["ORC", "PDF", "DOCX", "EXCEL"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "Which big data technology is often used with Hadoop to run SQL queries?",
        options: ["Hive", "Spark MLlib", "Kafka", "Flink"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "Which of the following frameworks is designed for iterative machine learning workflows?",
        options: ["Apache Mahout", "HDFS", "Kafka", "Apache Storm"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "What is the purpose of Apache Pig in the Hadoop ecosystem?",
        options: ["High-level scripting for data transformation", "Distributed messaging", "File system management", "Cluster monitoring"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "Which feature makes Apache Flink ideal for real-time analytics?",
        options: ["Low latency and event time processing", "Batch processing only", "Fixed storage model", "Single-node deployment"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "What type of architecture does Apache Spark use for data processing?",
        options: ["Master-Slave", "Client-Server", "Monolithic", "Peer-to-Peer"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "What is Apache HBase primarily used for?",
        options: ["NoSQL database storage", "Graph processing", "Batch processing", "Data visualization"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "What is the purpose of DataFrames in Spark?",
        options: ["Efficient structured data processing", "Only used for streaming", "A replacement for HDFS", "Encrypting sensitive data"],
        answer: 0,
    },
    {
        section: "Big Data Frameworks",
        question: "Which big data tool is best suited for ETL (Extract, Transform, Load) processes?",
        options: ["Apache NiFi", "Kafka", "Flink", "Pig"],
        answer: 0,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "What is the primary purpose of a blockchain?",
        options: [
            "To centralize data storage",
            "To provide a decentralized and immutable ledger",
            "To replace traditional databases",
            "To eliminate the need for cryptography"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "Which of the following is a key feature of blockchain technology?",
        options: [
            "Centralized control",
            "Immutability of data",
            "Single point of failure",
            "High dependency on intermediaries"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "What is a decentralized application (DApp)?",
        options: [
            "An application that runs on a single server",
            "An application that runs on a decentralized network like blockchain",
            "An application that relies on centralized databases",
            "An application that eliminates the need for cryptography"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "Which of the following is a key benefit of blockchain technology?",
        options: [
            "Increased reliance on intermediaries",
            "Trustless and secure transactions",
            "Centralized control of data",
            "Single point of failure"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "What is the role of consensus mechanisms in blockchain?",
        options: [
            "To centralize decision-making",
            "To ensure agreement among nodes on the state of the ledger",
            "To eliminate the need for cryptography",
            "To increase dependency on intermediaries"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "Which of the following is a common consensus mechanism in blockchain?",
        options: [
            "Proof of Work (PoW)",
            "Centralized Authority",
            "Single Point of Failure",
            "Traditional Database Replication"
        ],
        answer: 0,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "What is the primary purpose of smart contracts in blockchain?",
        options: [
            "To replace traditional databases",
            "To automate and enforce agreements without intermediaries",
            "To centralize control of transactions",
            "To eliminate the need for cryptography"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "Which of the following is a key benefit of decentralized applications (DApps)?",
        options: [
            "Increased reliance on intermediaries",
            "Censorship resistance and transparency",
            "Centralized control of data",
            "Single point of failure"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "What is the primary challenge of blockchain scalability?",
        options: [
            "High transaction throughput",
            "Limited ability to handle large numbers of transactions",
            "Centralized control of data",
            "Elimination of cryptography"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "Which of the following is a real-world application of blockchain beyond cryptocurrencies?",
        options: [
            "Supply chain transparency",
            "Centralized banking systems",
            "Traditional databases",
            "Single point of failure systems"
        ],
        answer: 0,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "What is the primary purpose of cryptography in blockchain?",
        options: [
            "To centralize control of data",
            "To ensure data security and integrity",
            "To eliminate the need for consensus mechanisms",
            "To increase dependency on intermediaries"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "Which of the following is a key characteristic of a public blockchain?",
        options: [
            "Centralized control",
            "Permissionless access",
            "Single point of failure",
            "High dependency on intermediaries"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "What is the primary purpose of a private blockchain?",
        options: [
            "To allow anyone to join the network",
            "To restrict access to a specific group of participants",
            "To eliminate the need for cryptography",
            "To increase dependency on intermediaries"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "Which of the following is a key benefit of blockchain in supply chain management?",
        options: [
            "Increased reliance on intermediaries",
            "Improved transparency and traceability",
            "Centralized control of data",
            "Single point of failure"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "What is the primary purpose of a token in blockchain?",
        options: [
            "To replace traditional databases",
            "To represent digital assets or utility within a blockchain ecosystem",
            "To centralize control of transactions",
            "To eliminate the need for cryptography"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "Which of the following is a key challenge of blockchain adoption?",
        options: [
            "High transaction throughput",
            "Regulatory and legal uncertainties",
            "Centralized control of data",
            "Elimination of cryptography"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "What is the primary purpose of a decentralized identity system in blockchain?",
        options: [
            "To centralize control of user data",
            "To provide users with control over their own identity information",
            "To eliminate the need for cryptography",
            "To increase dependency on intermediaries"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "Which of the following is a key benefit of blockchain in healthcare?",
        options: [
            "Increased reliance on intermediaries",
            "Improved data security and patient privacy",
            "Centralized control of data",
            "Single point of failure"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "What is the primary purpose of a permissioned blockchain?",
        options: [
            "To allow anyone to join the network",
            "To restrict access to a specific group of participants",
            "To eliminate the need for cryptography",
            "To increase dependency on intermediaries"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "Which of the following is a key benefit of blockchain in voting systems?",
        options: [
            "Increased reliance on intermediaries",
            "Improved transparency and tamper resistance",
            "Centralized control of data",
            "Single point of failure"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "What is the primary purpose of a hash function in blockchain?",
        options: [
            "To centralize control of data",
            "To ensure data integrity and security",
            "To eliminate the need for consensus mechanisms",
            "To increase dependency on intermediaries"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "Which of the following is a key characteristic of a decentralized application (DApp)?",
        options: [
            "Centralized control of data",
            "Open-source and transparent code",
            "Single point of failure",
            "High dependency on intermediaries"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "What is the primary purpose of a blockchain node?",
        options: [
            "To centralize control of data",
            "To maintain a copy of the blockchain and validate transactions",
            "To eliminate the need for cryptography",
            "To increase dependency on intermediaries"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "Which of the following is a key benefit of blockchain in real estate?",
        options: [
            "Increased reliance on intermediaries",
            "Improved transparency and reduced fraud",
            "Centralized control of data",
            "Single point of failure"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "What is the primary purpose of a blockchain explorer?",
        options: [
            "To centralize control of data",
            "To view and analyze transactions on the blockchain",
            "To eliminate the need for cryptography",
            "To increase dependency on intermediaries"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "Which of the following is a key challenge of blockchain interoperability?",
        options: [
            "High transaction throughput",
            "Difficulty in enabling communication between different blockchains",
            "Centralized control of data",
            "Elimination of cryptography"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "What is the primary purpose of a decentralized finance (DeFi) application?",
        options: [
            "To centralize control of financial transactions",
            "To provide financial services without intermediaries",
            "To eliminate the need for cryptography",
            "To increase dependency on intermediaries"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "Which of the following is a key benefit of blockchain in intellectual property management?",
        options: [
            "Increased reliance on intermediaries",
            "Improved transparency and proof of ownership",
            "Centralized control of data",
            "Single point of failure"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "What is the primary purpose of a blockchain wallet?",
        options: [
            "To centralize control of data",
            "To store and manage digital assets",
            "To eliminate the need for cryptography",
            "To increase dependency on intermediaries"
        ],
        answer: 1,
    },
    {
        section: "Blockchain & Decentralized Apps",
        question: "Which of the following is a key benefit of blockchain in energy trading?",
        options: [
            "Increased reliance on intermediaries",
            "Improved transparency and peer-to-peer trading",
            "Centralized control of data",
            "Single point of failure"
        ],
        answer: 1,
    },

    {
        section: "Formal Methods in Software Engineering",
        question: "What is a primary goal of formal methods in software engineering?",
        options: ["To increase software maintainability", "To ensure software is free from bugs", "To enhance user experience", "To reduce development time"],
        answer: 1,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "Which of the following is a formal method used in software engineering?",
        options: ["Agile methodology", "Waterfall model", "Z notation", "Scrum"],
        answer: 2,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "What is the main advantage of using formal methods in software engineering?",
        options: ["Faster development cycles", "Improved accuracy and correctness", "Better team collaboration", "Lower costs"],
        answer: 1,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "Which mathematical concept is often used in formal methods for software verification?",
        options: ["Probability theory", "Number theory", "Set theory", "Game theory"],
        answer: 2,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "What is the purpose of model checking in formal methods?",
        options: ["To verify that software meets requirements", "To simulate user interactions", "To manage project timelines", "To improve code readability"],
        answer: 0,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "Which of the following is an example of a formal specification language?",
        options: ["UML", "Java", "HTML", "Alloy"],
        answer: 3,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "What does the acronym 'LTL' stand for in formal methods?",
        options: ["Last Time Logic", "Linear Temporal Logic", "Loop Termination Logic", "Logical Temporal Language"],
        answer: 1,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "What is a common use of formal methods in software engineering?",
        options: ["To design user interfaces", "To verify hardware designs", "To optimize databases", "To create marketing strategies"],
        answer: 1,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "Which formal method tool is used for theorem proving?",
        options: ["JIRA", "Coq", "Git", "Eclipse"],
        answer: 1,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "What is the main challenge of using formal methods in software engineering?",
        options: ["Lack of documentation", "High computational costs", "Steep learning curve", "Incompatibility with agile practices"],
        answer: 2,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "Which of the following is a benefit of using formal verification?",
        options: ["Faster debugging process", "Ensuring safety-critical systems function correctly", "Reducing memory usage", "Improving user interface design"],
        answer: 1,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "What is the B method used for?",
        options: ["Database optimization", "Formal specification and development", "Frontend development", "Cloud computing"],
        answer: 1,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "Which of the following is a drawback of formal methods?",
        options: ["Increased risk of bugs", "Complexity in large systems", "Lack of scalability", "High maintenance costs"],
        answer: 2,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "What is the main purpose of model-based testing?",
        options: ["To create user stories", "To verify models against requirements", "To design graphical interfaces", "To manage software releases"],
        answer: 1,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "Which of the following formal methods is known for its use in verifying concurrent systems?",
        options: ["Petri nets", "Waterfall model", "Agile methodology", "Scrum"],
        answer: 0,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "Which tool is commonly used for formal verification of cryptographic protocols?",
        options: ["Promela", "SPIN", "Tamarin", "Coq"],
        answer: 2,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "Which formal method approach uses state machines for modeling systems?",
        options: ["Model checking", "Process algebra", "State transition diagrams", "Petri nets"],
        answer: 2,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "What is the role of a proof assistant in formal methods?",
        options: ["To generate test cases", "To assist in constructing mathematical proofs", "To monitor system performance", "To analyze user behavior"],
        answer: 1,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "Which type of logic is often used in temporal logic for specifying system behaviors?",
        options: ["Propositional logic", "First-order logic", "Temporal logic", "Predicate logic"],
        answer: 2,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "What is a significant advantage of using formal methods in safety-critical systems?",
        options: ["Increased user engagement", "Reduced development time", "Guaranteed correctness", "Better aesthetics"],
        answer: 2,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "Which formal verification technique checks whether a system model satisfies given properties?",
        options: ["Code review", "Unit testing", "Model checking", "Integration testing"],
        answer: 2,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "What is the main focus of formal specification languages?",
        options: ["Graphical design", "System verification", "Specification of system properties", "Code optimization"],
        answer: 2,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "Which of the following is an example of a formal method tool for model checking?",
        options: ["SPIN", "Git", "JIRA", "Selenium"],
        answer: 0,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "What is a primary benefit of using formal methods in software engineering?",
        options: ["Better marketing strategies", "Ensuring software reliability", "Improved graphic design", "Reduced user training time"],
        answer: 1,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "Which formal method is used for proving the correctness of algorithms?",
        options: ["Static analysis", "Regression testing", "Theorem proving", "Performance testing"],
        answer: 2,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "What does the acronym 'CTL' stand for in formal methods?",
        options: ["Cyclic Temporal Logic", "Computational Tree Logic", "Cumulative Temporal Logic", "Continuous Time Logic"],
        answer: 1,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "Which formal verification method involves exhaustively exploring all possible states of a system?",
        options: ["Model checking", "Unit testing", "Integration testing", "Performance testing"],
        answer: 0,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "What is an abstract state machine used for in formal methods?",
        options: ["Defining software architecture", "Modelling system behavior", "Managing project tasks", "Designing user interfaces"],
        answer: 1,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "Which of the following is a disadvantage of using formal methods?",
        options: ["Lower software quality", "Higher training costs", "Limited tool availability", "Less user-friendly interfaces"],
        answer: 1,
    },
    {
        section: "Formal Methods in Software Engineering",
        question: "What is the purpose of a formal specification in software engineering?",
        options: ["To create marketing content", "To specify system behavior precisely", "To generate graphical designs", "To optimize database queries"],
        answer: 1,
    },
    {
        section: "Quantum Computing in Software",
        question: "What is a fundamental difference between quantum computing and classical computing?",
        options: ["Quantum computers use transistors", "Quantum computers use qubits", "Classical computers use qubits", "Quantum computers use classical bits"],
        answer: 1,
    },
    {
        section: "Quantum Computing in Software",
        question: "What is a qubit?",
        options: ["A binary digit", "A quantum bit that can exist in multiple states simultaneously", "A classical bit with enhanced speed", "A software algorithm"],
        answer: 1,
    },
    {
        section: "Quantum Computing in Software",
        question: "Which principle allows qubits to exist in multiple states at once?",
        options: ["Superposition", "Binary logic", "Bit manipulation", "Transistor switching"],
        answer: 0,
    },
    {
        section: "Quantum Computing in Software",
        question: "What is quantum entanglement?",
        options: ["A state where particles are independent", "A state where particles are interconnected and instantaneously affect each other", "A classical computing algorithm", "A method of error correction"],
        answer: 1,
    },
    {
        section: "Quantum Computing in Software",
        question: "How does quantum parallelism contribute to quantum computing?",
        options: ["It slows down computations", "It allows simultaneous processing of multiple inputs", "It increases power consumption", "It limits the number of qubits"],
        answer: 1,
    },
    {
        section: "Quantum Computing in Software",
        question: "What is the primary advantage of quantum computing over classical computing?",
        options: ["Larger data storage capacity", "Faster processing speeds for specific problems", "Simpler programming languages", "Increased electrical efficiency"],
        answer: 1,
    },
    {
        section: "Quantum Computing in Software",
        question: "Which of the following is a notable quantum algorithm?",
        options: ["Dijkstra's algorithm", "SHA-256", "Shor's algorithm", "A* algorithm"],
        answer: 2,
    },
    {
        section: "Quantum Computing in Software",
        question: "What is the purpose of Grover's algorithm in quantum computing?",
        options: ["To perform integer factorization", "To solve linear equations", "To search unsorted databases faster than classical algorithms", "To encrypt data"],
        answer: 2,
    },
    {
        section: "Quantum Computing in Software",
        question: "In quantum computing, what is meant by decoherence?",
        options: ["The isolation of qubits from their environment", "The loss of quantum information due to interaction with the environment", "The amplification of quantum states", "The stabilization of qubits"],
        answer: 1,
    },
    {
        section: "Quantum Computing in Software",
        question: "Which area can significantly benefit from quantum computing applications?",
        options: ["Graphic design", "Cryptography", "Office administration", "Social media management"],
        answer: 1,
    },
    {
        section: "Quantum Computing in Software",
        question: "What is the significance of the no-cloning theorem in quantum computing?",
        options: ["It allows duplication of quantum states", "It prevents the exact copying of arbitrary quantum states", "It enhances error correction", "It simplifies quantum computations"],
        answer: 1,
    },
    {
        section: "Quantum Computing in Software",
        question: "What is a quantum gate?",
        options: ["A classical circuit component", "A fundamental building block for quantum circuits", "A software library for classical computers", "A tool for managing cloud services"],
        answer: 1,
    },
    {
        section: "Quantum Computing in Software",
        question: "Which quantum technology company developed the D-Wave system?",
        options: ["IBM", "Microsoft", "D-Wave Systems", "Google"],
        answer: 2,
    },
    {
        section: "Quantum Computing in Software",
        question: "What is the role of a quantum annealer?",
        options: ["To simulate annealing processes", "To solve optimization problems", "To control electrical circuits", "To process image data"],
        answer: 1,
    },
    {
        section: "Quantum Computing in Software",
        question: "Which concept is unique to quantum computing?",
        options: ["Binary code", "Classical logic", "Quantum supremacy", "Object-oriented programming"],
        answer: 2,
    },
    {
        section: "Quantum Computing in Software",
        question: "What is the significance of the Bloch sphere in quantum computing?",
        options: ["To represent classical bits", "To visualize quantum states", "To design software interfaces", "To optimize performance"],
        answer: 1,
    },
    {
        section: "Quantum Computing in Software",
        question: "Which of the following is a quantum programming language?",
        options: ["C++", "Python", "Q#", "JavaScript"],
        answer: 2,
    },
    {
        section: "Quantum Computing in Software",
        question: "How does quantum tunneling benefit quantum computing?",
        options: ["It increases hardware size", "It allows particles to pass through potential barriers", "It slows down computations", "It increases energy consumption"],
        answer: 1,
    },
    {
        section: "Quantum Computing in Software",
        question: "What is a significant challenge in building quantum computers?",
        options: ["Lack of classical bits", "Maintaining quantum coherence", "Limited software availability", "High electrical power consumption"],
        answer: 1,
    },
    {
        section: "Quantum Computing in Software",
        question: "Which field can benefit from quantum simulations?",
        options: ["Finance", "Environmental science", "Social media", "Marketing"],
        answer: 1,
    },
    {
        section: "Quantum Computing in Software",
        question: "What is quantum error correction?",
        options: ["A method to correct errors in classical bits", "A technique to protect quantum information from errors", "A software debugging tool", "A system monitoring tool"],
        answer: 1,
    },
    {
        section: "Quantum Computing in Software",
        question: "What is the use of quantum cryptography?",
        options: ["To design user interfaces", "To securely transmit information using quantum mechanics", "To analyze social media data", "To optimize databases"],
        answer: 1,
    },
    {
        section: "Quantum Computing in Software",
        question: "Which principle is used in quantum key distribution (QKD)?",
        options: ["Binary encoding", "Classical encryption", "Quantum entanglement", "Software virtualization"],
        answer: 2,
    },
    {
        section: "Quantum Computing in Software",
        question: "What is quantum superposition?",
        options: ["The unique quantum state where a particle can be in multiple states at once", "A classical computing process", "A method for software testing", "A way to increase data storage"],
        answer: 0,
    },
    {
        section: "Quantum Computing in Software",
        question: "How do quantum circuits differ from classical circuits?",
        options: ["Quantum circuits use classical gates", "Quantum circuits use quantum gates and qubits", "Quantum circuits have no transistors", "Quantum circuits are larger"],
        answer: 1,
    },
    {
        section: "Quantum Computing in Software",
        question: "Which quantum computing concept is used for solving optimization problems?",
        options: ["Binary logic", "Quantum annealing", "Classical algorithms", "Image processing"],
        answer: 1,
    },
    {
        section: "Quantum Computing in Software",
        question: "Which property of quantum mechanics is exploited in quantum computing?",
        options: ["Determinism", "Uncertainty", "Classical behavior", "Software abstraction"],
        answer: 1,
    },
    {
        section: "Quantum Computing in Software",
        question: "What is the advantage of quantum supremacy?",
        options: ["Achieving computations that are impossible for classical computers", "Increased software portability", "Enhanced user interfaces", "Better internet connectivity"],
        answer: 0,
    },
    {
        section: "Quantum Computing in Software",
        question: "How does quantum Fourier transform (QFT) aid in quantum algorithms?",
        options: ["By increasing computing speed", "By providing a method for factorization", "By encrypting data", "By improving data visualization"],
        answer: 1,
    },
    {
        section: "Quantum Computing in Software",
        question: "What is the significance of quantum phase estimation?",
        options: ["It measures quantum error rates", "It provides a method for estimating eigenvalues of unitary operators", "It optimizes software code", "It enhances graphic design"],
        answer: 1,
    },
      {
        section: "Software Maintenance & Refactoring",
        question: "What is the primary goal of software maintenance?",
        options: ["To introduce new bugs", "To keep software up-to-date and functional", "To rewrite the entire codebase", "To reduce user engagement"],
        answer: 1,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "Which of the following is a type of software maintenance?",
        options: ["Adaptive", "Destructive", "Deprecative", "Aggressive"],
        answer: 0,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "What is refactoring in the context of software engineering?",
        options: ["Redesigning the user interface", "Restructuring existing code without changing its behavior", "Writing new code from scratch", "Removing all comments from the codebase"],
        answer: 1,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "Why is code readability important in software maintenance?",
        options: ["It makes the code more visually appealing", "It facilitates easier understanding and modification of code", "It increases the file size", "It reduces execution speed"],
        answer: 1,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "Which of the following best practices is essential for effective software maintenance?",
        options: ["Ignoring user feedback", "Using version control systems", "Avoiding documentation", "Frequent use of global variables"],
        answer: 1,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "What is technical debt in software engineering?",
        options: ["A financial liability", "The accumulation of shortcuts and suboptimal solutions in the codebase", "A measure of user satisfaction", "A type of malware"],
        answer: 1,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "What is the purpose of regression testing during maintenance?",
        options: ["To create new features", "To ensure that changes haven't introduced new bugs", "To remove old features", "To optimize performance"],
        answer: 1,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "Which refactoring technique involves breaking a large method into smaller, more manageable methods?",
        options: ["Method Extraction", "Code Obfuscation", "Inversion of Control", "Circular Dependency"],
        answer: 0,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "What is the role of continuous integration in software maintenance?",
        options: ["To reduce code readability", "To automate the merging and testing of code changes", "To create manual test cases", "To eliminate the need for code reviews"],
        answer: 1,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "Which of the following is an example of preventive maintenance?",
        options: ["Fixing a bug reported by a user", "Updating the code to support new hardware", "Refactoring code to improve its structure", "Adding a new feature"],
        answer: 2,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "Why is code modularity important in software maintenance?",
        options: ["It increases code redundancy", "It makes it easier to manage and update individual components", "It complicates debugging", "It slows down development"],
        answer: 1,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "What is the purpose of a code review in the context of software maintenance?",
        options: ["To delete old code", "To identify and fix potential issues in code", "To reduce code quality", "To increase technical debt"],
        answer: 1,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "Which metric is commonly used to measure the maintainability of software?",
        options: ["Lines of code (LOC)", "Cyclomatic complexity", "Page views", "Download count"],
        answer: 1,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "What does the term 'refactoring' mean?",
        options: ["Adding new features to the software", "Changing the structure of the code to improve readability and maintainability", "Deleting old code", "Compiling the code"],
        answer: 1,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "Which type of maintenance focuses on fixing bugs and errors in the software?",
        options: ["Perfective maintenance", "Corrective maintenance", "Adaptive maintenance", "Preventive maintenance"],
        answer: 1,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "What is a 'code smell' in the context of software engineering?",
        options: ["An indicator of poor code quality that may lead to maintenance issues", "A pleasant fragrance associated with clean code", "A type of malware", "A method of code optimization"],
        answer: 0,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "Why is documentation important in software maintenance?",
        options: ["It increases code complexity", "It helps developers understand and maintain the codebase", "It reduces software performance", "It creates more bugs"],
        answer: 1,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "Which refactoring technique aims to improve the performance of a software system?",
        options: ["Extract Method", "Remove Dead Code", "Reorder Code", "Optimize Algorithm"],
        answer: 3,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "What is the benefit of using design patterns in software maintenance?",
        options: ["They increase code redundancy", "They provide reusable solutions to common problems", "They complicate debugging", "They reduce software reliability"],
        answer: 1,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "Which of the following practices can help reduce technical debt?",
        options: ["Skipping code reviews", "Frequent refactoring", "Using outdated libraries", "Avoiding testing"],
        answer: 1,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "Why is it important to use version control systems during software maintenance?",
        options: ["To track changes and collaborate with other developers", "To increase code size", "To eliminate the need for testing", "To reduce software performance"],
        answer: 0,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "Which technique is used to identify areas of the code that need refactoring?",
        options: ["Code Obfuscation", "Code Smell Detection", "Code Formatting", "Code Redundancy"],
        answer: 1,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "What is the purpose of test-driven development (TDD) in software maintenance?",
        options: ["To create software without testing", "To write tests before writing the actual code", "To increase technical debt", "To remove old features"],
        answer: 1,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "Which of the following is an example of perfective maintenance?",
        options: ["Fixing a critical bug", "Enhancing the user interface", "Updating the software for new regulations", "Removing dead code"],
        answer: 1,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "Why is it important to remove dead code during maintenance?",
        options: ["To increase code complexity", "To simplify the codebase and improve readability", "To reduce testing efforts", "To introduce new bugs"],
        answer: 1,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "Which practice involves continuously integrating code changes into a shared repository?",
        options: ["Manual Testing", "Continuous Integration", "Code Reviewing", "Bug Reporting"],
        answer: 1,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "What is the main goal of software refactoring?",
        options: ["To introduce new features", "To restructure existing code for better readability and maintainability", "To increase software size", "To avoid testing"],
        answer: 1,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "Which type of maintenance focuses on adapting software to new environments or requirements?",
        options: ["Corrective Maintenance", "Perfective Maintenance", "Adaptive Maintenance", "Preventive Maintenance"],
        answer: 2,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "What is the benefit of using modular design in software maintenance?",
        options: ["It increases code redundancy", "It simplifies maintenance by isolating changes to specific modules", "It complicates debugging", "It reduces code quality"],
        answer: 1,
    },
    {
        section: "Software Maintenance & Refactoring",
        question: "Why is regression testing important after making code changes?",
        options: ["To ensure that new bugs are introduced", "To verify that existing functionality is not broken", "To increase code complexity", "To skip documentation"],
        answer: 1,
    },

    {
        section: "Human Factors in Software Engineering",
        question: "What is the primary goal of improving team collaboration in software engineering?",
        options: ["To reduce the number of team members", "To enhance communication and productivity", "To increase project costs", "To slow down development"],
        answer: 1,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "Which practice can improve team collaboration in software projects?",
        options: ["Siloed working", "Regular team meetings and stand-ups", "Ignoring team feedback", "Micromanaging team members"],
        answer: 1,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "What does UX stand for in the context of software engineering?",
        options: ["User Experience", "Ultimate Execution", "User Exchange", "Unified Extension"],
        answer: 0,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "Why is user experience (UX) important in software development?",
        options: ["It enhances system performance", "It ensures software is user-friendly and meets user needs", "It increases technical debt", "It reduces software functionality"],
        answer: 1,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "Which method can be used to gather user feedback during the development process?",
        options: ["Code reviews", "User interviews and surveys", "Automated testing", "Ignoring user input"],
        answer: 1,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "What is the purpose of documentation in software engineering?",
        options: ["To confuse developers", "To provide clear information and instructions", "To increase code complexity", "To reduce development speed"],
        answer: 1,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "Which of the following is a benefit of good documentation?",
        options: ["Decreased collaboration", "Improved understanding and maintenance", "Increased project costs", "Reduced code quality"],
        answer: 1,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "What is a persona in the context of UX design?",
        options: ["A fictional representation of a user", "A type of software bug", "A project management tool", "A programming language"],
        answer: 0,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "Why is empathy important in UX design?",
        options: ["It increases technical complexity", "It helps designers understand and address user needs", "It reduces system performance", "It complicates the development process"],
        answer: 1,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "Which technique can be used to improve user experience (UX)?",
        options: ["Ignoring user feedback", "Conducting usability testing", "Adding more features without considering usability", "Increasing technical debt"],
        answer: 1,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "What is the role of a UX designer in a software development team?",
        options: ["To write backend code", "To design user interfaces and improve user experience", "To manage project budgets", "To perform hardware testing"],
        answer: 1,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "Which practice can help improve team communication?",
        options: ["Isolating team members", "Using collaborative tools and platforms", "Ignoring team feedback", "Reducing team meetings"],
        answer: 1,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "Why is it important to consider human factors in software engineering?",
        options: ["To increase system errors", "To create user-friendly and efficient software", "To complicate the development process", "To reduce software quality"],
        answer: 1,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "Which of the following is an example of good documentation practice?",
        options: ["Using jargon and complex terms", "Writing clear and concise instructions", "Leaving out important details", "Skipping documentation"],
        answer: 1,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "What is the benefit of conducting regular code reviews?",
        options: ["Increased code complexity", "Improved code quality and team collaboration", "Reduced development speed", "Higher project costs"],
        answer: 1,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "Which method can be used to assess the usability of software?",
        options: ["Unit testing", "Usability testing", "Performance testing", "Load testing"],
        answer: 1,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "What is a common challenge in team collaboration?",
        options: ["Effective communication", "Project isolation", "Individual contributions", "Meeting deadlines"],
        answer: 0,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "Why is user-centered design important in software development?",
        options: ["It reduces user satisfaction", "It ensures the software meets user needs and preferences", "It increases development costs", "It complicates the code"],
        answer: 1,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "What is the purpose of creating wireframes in UX design?",
        options: ["To write code", "To create a visual representation of the user interface layout", "To manage project tasks", "To conduct performance testing"],
        answer: 1,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "Which practice can help improve the readability of code?",
        options: ["Using meaningful variable names", "Avoiding comments", "Writing long, complex functions", "Ignoring code standards"],
        answer: 0,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "What is the role of documentation in onboarding new team members?",
        options: ["To confuse new members", "To provide necessary information and guidance", "To increase technical debt", "To reduce code quality"],
        answer: 1,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "Which of the following tools can be used to improve team collaboration?",
        options: ["Slack", "Notepad", "WordPad", "Paint"],
        answer: 0,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "What is the benefit of using user personas in UX design?",
        options: ["To increase project costs", "To better understand and design for different user types", "To complicate the design process", "To reduce software performance"],
        answer: 1,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "What is the purpose of conducting user surveys during software development?",
        options: ["To collect user feedback and preferences", "To reduce code quality", "To ignore user needs", "To increase development speed"],
        answer: 0,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "Which factor can negatively impact team collaboration?",
        options: ["Effective communication", "Clear project goals", "Lack of trust among team members", "Regular meetings"],
        answer: 2,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "Why is it important to have a diverse software development team?",
        options: ["To increase code complexity", "To bring different perspectives and ideas to the project", "To reduce productivity", "To create uniform solutions"],
        answer: 1,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "Which practice can help improve user experience (UX) in software?",
        options: ["Ignoring accessibility", "Conducting user research and usability testing", "Adding unnecessary features", "Reducing system performance"],
        answer: 1,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "What is the significance of empathy mapping in UX design?",
        options: ["To visualize and understand user emotions and experiences", "To increase technical debt", "To complicate the design process", "To reduce user satisfaction"],
        answer: 0,
    },
    {
        section: "Human Factors in Software Engineering",
        question: "Which factor can contribute to effective team collaboration?",
        options: ["Clear communication channels", "Ignoring team feedback", "Working in isolation", "Inconsistent goals"],
        answer: 0,
    },

 {
        section: "Edge & IoT Software Development",
        question: "What is the primary goal of edge computing in IoT?",
        options: [
            "To centralize data processing in the cloud",
            "To process data closer to the source of data generation",
            "To eliminate the need for real-time processing",
            "To increase latency in data processing"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "Which of the following is a key benefit of edge computing?",
        options: [
            "Increased latency",
            "Reduced bandwidth usage",
            "Centralized data storage",
            "Higher dependency on cloud servers"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "What is the primary challenge of real-time data processing in IoT?",
        options: [
            "High latency",
            "Low data volume",
            "Centralized processing",
            "Limited scalability"
        ],
        answer: 0,
    },
    {
        section: "Edge & IoT Software Development",
        question: "Which of the following is a common use case for edge computing in IoT?",
        options: [
            "Batch processing of historical data",
            "Real-time monitoring of industrial equipment",
            "Centralized data storage",
            "High-latency applications"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "What is the primary purpose of an IoT gateway?",
        options: [
            "To centralize data processing in the cloud",
            "To connect IoT devices and facilitate communication with the cloud",
            "To eliminate the need for edge computing",
            "To increase latency in data processing"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "Which of the following is a key challenge in IoT software development?",
        options: [
            "Low device heterogeneity",
            "Handling large volumes of real-time data",
            "Centralized data processing",
            "Limited scalability"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "What is the primary benefit of using edge computing for IoT applications?",
        options: [
            "Increased latency",
            "Improved real-time processing and reduced bandwidth usage",
            "Centralized data storage",
            "Higher dependency on cloud servers"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "Which of the following is a key characteristic of edge computing?",
        options: [
            "Centralized data processing",
            "Distributed data processing closer to the data source",
            "High latency",
            "Limited scalability"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "What is the primary purpose of real-time data processing in IoT?",
        options: [
            "To delay decision-making processes",
            "To enable immediate insights and actions based on data",
            "To centralize data storage",
            "To increase latency"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "Which of the following is a common challenge in IoT device communication?",
        options: [
            "Low device heterogeneity",
            "Interoperability between different protocols",
            "Centralized data processing",
            "Limited scalability"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "What is the primary purpose of fog computing in IoT?",
        options: [
            "To centralize data processing in the cloud",
            "To extend edge computing capabilities closer to the data source",
            "To eliminate the need for real-time processing",
            "To increase latency in data processing"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "Which of the following is a key benefit of fog computing?",
        options: [
            "Increased latency",
            "Improved scalability and reduced bandwidth usage",
            "Centralized data storage",
            "Higher dependency on cloud servers"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "What is the primary challenge of data security in IoT?",
        options: [
            "Low device heterogeneity",
            "Protecting data across distributed devices and networks",
            "Centralized data processing",
            "Limited scalability"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "Which of the following is a common protocol used in IoT communication?",
        options: [
            "HTTP",
            "MQTT",
            "FTP",
            "SMTP"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "What is the primary purpose of MQTT in IoT?",
        options: [
            "To centralize data processing in the cloud",
            "To enable lightweight and efficient communication between devices",
            "To eliminate the need for edge computing",
            "To increase latency in data processing"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "Which of the following is a key challenge of IoT device management?",
        options: [
            "Low device heterogeneity",
            "Managing and updating a large number of distributed devices",
            "Centralized data processing",
            "Limited scalability"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "What is the primary purpose of edge analytics in IoT?",
        options: [
            "To centralize data processing in the cloud",
            "To perform data analysis closer to the data source",
            "To eliminate the need for real-time processing",
            "To increase latency in data processing"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "Which of the following is a key benefit of edge analytics?",
        options: [
            "Increased latency",
            "Faster insights and reduced bandwidth usage",
            "Centralized data storage",
            "Higher dependency on cloud servers"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "What is the primary challenge of power management in IoT devices?",
        options: [
            "High power consumption in centralized systems",
            "Ensuring energy efficiency in distributed devices",
            "Centralized data processing",
            "Limited scalability"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "Which of the following is a common use case for IoT in smart cities?",
        options: [
            "Batch processing of historical data",
            "Real-time traffic monitoring and management",
            "Centralized data storage",
            "High-latency applications"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "What is the primary purpose of a time-series database in IoT?",
        options: [
            "To centralize data processing in the cloud",
            "To store and analyze time-stamped data from IoT devices",
            "To eliminate the need for edge computing",
            "To increase latency in data processing"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "Which of the following is a key challenge of IoT data storage?",
        options: [
            "Low data volume",
            "Handling large volumes of time-series data",
            "Centralized data processing",
            "Limited scalability"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "What is the primary purpose of a digital twin in IoT?",
        options: [
            "To centralize data processing in the cloud",
            "To create a virtual representation of a physical device or system",
            "To eliminate the need for edge computing",
            "To increase latency in data processing"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "Which of the following is a key benefit of using digital twins in IoT?",
        options: [
            "Increased latency",
            "Improved monitoring and predictive maintenance",
            "Centralized data storage",
            "Higher dependency on cloud servers"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "What is the primary challenge of IoT device interoperability?",
        options: [
            "Low device heterogeneity",
            "Ensuring seamless communication between devices from different manufacturers",
            "Centralized data processing",
            "Limited scalability"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "Which of the following is a common use case for IoT in healthcare?",
        options: [
            "Batch processing of historical data",
            "Remote patient monitoring and real-time health tracking",
            "Centralized data storage",
            "High-latency applications"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "What is the primary purpose of edge AI in IoT?",
        options: [
            "To centralize data processing in the cloud",
            "To enable AI-based decision-making at the edge",
            "To eliminate the need for real-time processing",
            "To increase latency in data processing"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "Which of the following is a key benefit of edge AI in IoT?",
        options: [
            "Increased latency",
            "Faster decision-making and reduced bandwidth usage",
            "Centralized data storage",
            "Higher dependency on cloud servers"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "What is the primary challenge of IoT data privacy?",
        options: [
            "Low device heterogeneity",
            "Protecting sensitive data collected by IoT devices",
            "Centralized data processing",
            "Limited scalability"
        ],
        answer: 1,
    },
    {
        section: "Edge & IoT Software Development",
        question: "Which of the following is a common use case for IoT in agriculture?",
        options: [
            "Batch processing of historical data",
            "Real-time monitoring of soil and crop conditions",
            "Centralized data storage",
            "High-latency applications"
        ],
        answer: 1,
    },
  
        {
            section: "Future of Programming Languages",
            question: "What is AI-powered coding?",
            options: ["Coding done by artificial intelligence", "A type of machine learning", "Coding that uses AI to assist developers", "A programming language"],
            answer: 2,
        },
        {
            section: "Future of Programming Languages",
            question: "What is the primary advantage of using AI-powered coding tools?",
            options: ["Slower development speed", "Increased software errors", "Enhanced developer productivity", "Higher costs"],
            answer: 2,
        },
        {
            section: "Future of Programming Languages",
            question: "Which of the following is an example of a domain-specific language (DSL)?",
            options: ["Java", "HTML", "Python", "JavaScript"],
            answer: 1,
        },
        {
            section: "Future of Programming Languages",
            question: "What is the main purpose of a domain-specific language (DSL)?",
            options: ["To replace general-purpose languages", "To optimize system performance", "To provide specialized capabilities for a specific domain", "To create graphical user interfaces"],
            answer: 2,
        },
        {
            section: "Future of Programming Languages",
            question: "What is a low-code/no-code platform?",
            options: ["A platform with minimal coding required", "A platform that requires extensive coding", "A type of hardware", "A programming language"],
            answer: 0,
        },
        {
            section: "Future of Programming Languages",
            question: "Which benefit is associated with low-code/no-code platforms?",
            options: ["Increased development time", "Higher costs", "Faster application development", "Complex coding requirements"],
            answer: 2,
        },
        {
            section: "Future of Programming Languages",
            question: "What is the role of natural language processing (NLP) in AI-powered coding?",
            options: ["To analyze data", "To process human language and generate code", "To manage databases", "To design user interfaces"],
            answer: 1,
        },
        {
            section: "Future of Programming Languages",
            question: "Which trend involves using AI to assist with code completion and error detection?",
            options: ["Cloud computing", "Machine learning", "AI-powered coding", "Internet of Things (IoT)"],
            answer: 2,
        },
        {
            section: "Future of Programming Languages",
            question: "What is the benefit of using domain-specific languages (DSLs) in software development?",
            options: ["General-purpose capabilities", "Reduced customization", "Specialized functionality for specific tasks", "Higher learning curve"],
            answer: 2,
        },
        {
            section: "Future of Programming Languages",
            question: "Which of the following is a key feature of low-code/no-code platforms?",
            options: ["Command-line interfaces", "Visual development environments", "High coding complexity", "Manual code integration"],
            answer: 1,
        },
        {
            section: "Future of Programming Languages",
            question: "What is the significance of AI-powered code generation?",
            options: ["It increases code errors", "It automates repetitive coding tasks", "It complicates development", "It reduces code quality"],
            answer: 1,
        },
        {
            section: "Future of Programming Languages",
            question: "Which of the following is an example of an AI-powered coding tool?",
            options: ["Microsoft Word", "GitHub Copilot", "Adobe Photoshop", "Google Sheets"],
            answer: 1,
        },
        {
            section: "Future of Programming Languages",
            question: "What is the main goal of using low-code platforms in software development?",
            options: ["To increase technical debt", "To streamline development processes", "To reduce software functionality", "To complicate coding"],
            answer: 1,
        },
        {
            section: "Future of Programming Languages",
            question: "Which trend involves creating software applications with minimal hand-coding?",
            options: ["Agile methodology", "Low-code/no-code platforms", "Waterfall model", "Microservices architecture"],
            answer: 1,
        },
        {
            section: "Future of Programming Languages",
            question: "Why are domain-specific languages (DSLs) beneficial for specific industries?",
            options: ["They reduce code readability", "They provide tailored solutions for specific needs", "They increase coding complexity", "They reduce software performance"],
            answer: 1,
        },
        {
            section: "Future of Programming Languages",
            question: "What is the purpose of AI-powered code review tools?",
            options: ["To create new features", "To automatically detect and fix code issues", "To manage project timelines", "To design user interfaces"],
            answer: 2,
        },
        {
            section: "Future of Programming Languages",
            question: "Which technology trend aims to make coding accessible to non-developers?",
            options: ["Machine learning", "Cloud computing", "Low-code/no-code platforms", "Big data"],
            answer: 2,
        },
        {
            section: "Future of Programming Languages",
            question: "What is the advantage of using visual development environments in low-code platforms?",
            options: ["Increased code errors", "Enhanced user-friendly interface for development", "Reduced development speed", "Higher costs"],
            answer: 1,
        },
        {
            section: "Future of Programming Languages",
            question: "Which trend is likely to influence the future of programming languages by automating repetitive coding tasks?",
            options: ["Agile methodology", "Waterfall model", "AI-powered coding", "Microservices architecture"],
            answer: 2,
        },
        {
            section: "Future of Programming Languages",
            question: "What is the role of AI in enhancing code quality and reliability?",
            options: ["It reduces code quality", "It introduces more bugs", "It helps detect and fix issues automatically", "It increases development time"],
            answer: 2,
        },
        {
            section: "Future of Programming Languages",
            question: "Which of the following best describes domain-specific languages (DSLs)?",
            options: ["Languages designed for broad applications", "Languages focused on specific tasks within a domain", "Languages used for graphic design", "Languages limited to web development"],
            answer: 1,
        },
        {
            section: "Future of Programming Languages",
            question: "How do low-code platforms impact the software development lifecycle?",
            options: ["They complicate coding processes", "They streamline and accelerate development", "They reduce code quality", "They increase project costs"],
            answer: 1,
        },
        {
            section: "Future of Programming Languages",
            question: "What is the benefit of using AI-powered coding assistants?",
            options: ["Slower development", "Increased manual coding", "Faster code completion and fewer errors", "Reduced code maintainability"],
            answer: 2,
        },
        {
            section: "Future of Programming Languages",
            question: "Which trend involves providing specialized programming languages for specific industries?",
            options: ["AI-powered coding", "Low-code/no-code platforms", "Domain-specific languages (DSLs)", "Agile methodology"],
            answer: 2,
        },
      
    {
        section: "Future of Programming Languages",
        question: "What is the main focus of low-code/no-code platforms?",
        options: ["Simplifying coding", "Enhancing code complexity", "Maintaining legacy systems", "Increasing software errors"],
        answer: 0,
    },
    {
        section: "Future of Programming Languages",
        question: "How do AI-powered coding tools improve collaboration among developers?",
        options: ["By creating more conflicts", "By generating errors", "By providing real-time suggestions and feedback", "By slowing down development"],
        answer: 2,
    },
    {
        section: "Future of Programming Languages",
        question: "What is the impact of AI on the future of software testing?",
        options: ["It reduces test coverage", "It slows down testing processes", "It automates and enhances testing accuracy", "It increases manual intervention"],
        answer: 2,
    },
    {
        section: "Future of Programming Languages",
        question: "Which AI-powered tool can assist with identifying security vulnerabilities in code?",
        options: ["Slack", "AI-powered code review tools", "Trello", "Microsoft Excel"],
        answer: 1,
    },
    {
        section: "Future of Programming Languages",
        question: "What is a potential challenge of using AI-powered coding tools?",
        options: ["Decreased productivity", "Bias in training data", "Reduced code readability", "Increased manual coding"],
        answer: 1,
    },
    {
        section: "Future of Programming Languages",
        question: "Which trend involves using natural language processing to translate human language into code?",
        options: ["Cloud computing", "Low-code platforms", "NLP-powered coding", "IoT development"],
        answer: 2,
    },
    {
        section: "Future of Programming Languages",
        question: "How can domain-specific languages (DSLs) improve developer efficiency?",
        options: ["By offering general-purpose features", "By focusing on specific tasks and reducing complexity", "By increasing coding requirements", "By complicating development"],
        answer: 1,
    },
    {
        section: "Future of Programming Languages",
        question: "What is a common use case for low-code/no-code platforms in businesses?",
        options: ["Creating complex algorithms", "Developing enterprise applications", "Designing hardware components", "Managing cloud infrastructure"],
        answer: 1,
    },
    {
        section: "Future of Programming Languages",
        question: "What benefit do AI-powered code completion tools provide?",
        options: ["Decreased coding speed", "Enhanced development speed and accuracy", "Increased code errors", "Reduced code quality"],
        answer: 1,
    },
    {
        section: "Future of Programming Languages",
        question: "How do low-code platforms assist non-technical users?",
        options: ["By requiring extensive coding knowledge", "By simplifying the development process with visual tools", "By increasing technical complexity", "By limiting functionality"],
        answer: 1,
    },
    {
        section: "Future of Programming Languages",
        question: "What is the main focus of low-code/no-code platforms?",
        options: [
            "To increase the complexity of coding",
            "To enable rapid application development with minimal coding",
            "To replace all traditional programming languages",
            "To focus solely on backend development"
        ],
        answer: 1,
    },
    {
        section: "Future of Programming Languages",
        question: "Which of the following is a key benefit of AI-powered coding tools?",
        options: [
            "Increased manual effort in coding",
            "Reduced development time and improved efficiency",
            "Higher dependency on traditional programming languages",
            "Limited functionality for complex applications"
        ],
        answer: 1,
    },
    {
        section: "Future of Programming Languages",
        question: "What is the primary purpose of natural language processing (NLP) in AI-powered coding?",
        options: [
            "To design user interfaces",
            "To translate human language into executable code",
            "To manage databases",
            "To optimize system performance"
        ],
        answer: 1,
    },
    {
        section: "Future of Programming Languages",
        question: "Which of the following is a common use case for low-code/no-code platforms?",
        options: [
            "Developing complex operating systems",
            "Building business applications quickly",
            "Creating advanced machine learning models",
            "Designing hardware systems"
        ],
        answer: 1,
    },
    {
        section: "Future of Programming Languages",
        question: "What is the primary advantage of domain-specific languages (DSLs)?",
        options: [
            "They are suitable for all types of software development",
            "They provide specialized solutions for specific industries or tasks",
            "They are easier to learn than general-purpose languages",
            "They eliminate the need for programming expertise"
        ],
        answer: 1,
    },
    {
        section: "Future of Programming Languages",
        question: "Which of the following is a key challenge of low-code/no-code platforms?",
        options: [
            "Limited customization for complex applications",
            "Increased development time",
            "Higher costs compared to traditional coding",
            "Requiring extensive programming knowledge"
        ],
        answer: 0,
    },
    {
        section: "Future of Programming Languages",
        question: "What is the role of AI in automating code reviews?",
        options: [
            "To introduce more errors into the code",
            "To manually review code line by line",
            "To detect and fix issues automatically",
            "To increase the time required for code reviews"
        ],
        answer: 2,
    },
    {
        section: "Future of Programming Languages",
        question: "Which of the following is a key trend in the future of programming languages?",
        options: [
            "Increased reliance on manual coding",
            "The rise of AI-powered coding and low-code/no-code platforms",
            "The decline of domain-specific languages (DSLs)",
            "A shift away from visual development environments"
        ],
        answer: 1,
    },
    {
        section: "Future of Programming Languages",
        question: "What is the primary benefit of using AI-powered code generation tools?",
        options: [
            "Increased manual effort in coding",
            "Automation of repetitive coding tasks",
            "Higher dependency on traditional programming languages",
            "Reduced code quality"
        ],
        answer: 1,
    },
    {
        section: "Future of Programming Languages",
        question: "Which of the following is a key feature of domain-specific languages (DSLs)?",
        options: [
            "They are designed for general-purpose programming",
            "They provide specialized syntax and semantics for specific tasks",
            "They are difficult to learn and use",
            "They are primarily used for hardware programming"
        ],
        answer: 1,
    },
    {
        section: "Future of Programming Languages",
        question: "What is the primary purpose of low-code/no-code platforms in enterprise environments?",
        options: [
            "To increase the complexity of software development",
            "To enable non-developers to build applications quickly",
            "To replace all traditional programming languages",
            "To focus solely on backend development"
        ],
        answer: 1,
    },
    {
        section: "Future of Programming Languages",
        question: "Which of the following is a key benefit of AI-powered coding assistants like GitHub Copilot?",
        options: [
            "Increased manual effort in coding",
            "Faster code completion and reduced errors",
            "Higher dependency on traditional programming languages",
            "Limited functionality for complex applications"
        ],
        answer: 1,
    },
    {
        section: "Future of Programming Languages",
        question: "What is the primary challenge of using domain-specific languages (DSLs)?",
        options: [
            "They are too general-purpose for specific tasks",
            "They require specialized knowledge and may have limited applicability",
            "They are easier to learn than general-purpose languages",
            "They eliminate the need for programming expertise"
        ],
        answer: 1,
    },
    {
        section: "Future of Programming Languages",
        question: "Which of the following is a key trend in the evolution of programming languages?",
        options: [
            "A shift towards more complex and verbose syntax",
            "The integration of AI and machine learning into coding tools",
            "A decline in the use of visual development environments",
            "Increased reliance on manual coding practices"
        ],
        answer: 1,
    },
    {
        section: "Future of Programming Languages",
        question: "What is the primary advantage of using low-code/no-code platforms for prototyping?",
        options: [
            "Increased development time",
            "Rapid creation and iteration of application prototypes",
            "Higher costs compared to traditional coding",
            "Requiring extensive programming knowledge"
        ],
        answer: 1,
    },
    {
        section: "Future of Programming Languages",
        question: "Which of the following is a key benefit of AI-powered debugging tools?",
        options: [
            "Increased manual effort in debugging",
            "Automated detection and resolution of code issues",
            "Higher dependency on traditional debugging methods",
            "Reduced code quality"
        ],
        answer: 1,
    },
    {
        section: "Future of Programming Languages",
        question: "What is the primary purpose of visual development environments in low-code platforms?",
        options: [
            "To increase the complexity of coding",
            "To provide a user-friendly interface for building applications",
            "To replace all traditional programming languages",
            "To focus solely on backend development"
        ],
        answer: 1,
    },
    {
        section: "Future of Programming Languages",
        question: "Which of the following is a key trend in the future of programming languages?",
        options: [
            "Increased reliance on manual coding practices",
            "The rise of AI-powered coding and low-code/no-code platforms",
            "The decline of domain-specific languages (DSLs)",
            "A shift away from visual development environments"
        ],
        answer: 1,
    },
    {
        section: "Ethics in Software Engineering",
        question: "Which principle relates to ensuring AI systems are used fairly and justly?",
        options: ["Fairness", "Latency", "Redundancy", "Throughput"],
        answer: 0,
    },
    {
        section: "Ethics in Software Engineering",
        question: "What is the primary ethical concern with algorithmic bias?",
        options: [
            "It improves system performance",
            "It can lead to unfair or discriminatory outcomes",
            "It reduces data storage requirements",
            "It increases code efficiency"
        ],
        answer: 1,
    },
    {
        section: "Ethics in Software Engineering",
        question: "Which of the following is a key ethical principle in software development?",
        options: [
            "Transparency",
            "Maximizing profit",
            "Increasing system complexity",
            "Reducing user accessibility"
        ],
        answer: 0,
    },
    {
        section: "Ethics in Software Engineering",
        question: "What is the primary goal of ethical AI design?",
        options: [
            "To maximize computational speed",
            "To ensure fairness, accountability, and transparency",
            "To reduce data storage costs",
            "To increase system complexity"
        ],
        answer: 1,
    },
    {
        section: "Ethics in Software Engineering",
        question: "Which of the following is an example of an ethical dilemma in software engineering?",
        options: [
            "Choosing between faster performance and user privacy",
            "Optimizing code for better efficiency",
            "Reducing system latency",
            "Increasing data storage capacity"
        ],
        answer: 0,
    },
    {
        section: "Ethics in Software Engineering",
        question: "What is the primary ethical concern with data mining?",
        options: [
            "Increased system performance",
            "Potential violation of user privacy",
            "Reduced data storage requirements",
            "Improved code readability"
        ],
        answer: 1,
    },
    {
        section: "Ethics in Software Engineering",
        question: "Which principle ensures that AI systems are designed to avoid harm?",
        options: [
            "Non-maleficence",
            "Scalability",
            "Throughput",
            "Redundancy"
        ],
        answer: 0,
    },
    {
        section: "Ethics in Software Engineering",
        question: "What is the primary ethical concern with autonomous systems?",
        options: [
            "Increased system efficiency",
            "Lack of human oversight and accountability",
            "Reduced data storage requirements",
            "Improved code performance"
        ],
        answer: 1,
    },
    {
        section: "Ethics in Software Engineering",
        question: "Which of the following is a key ethical consideration in software testing?",
        options: [
            "Ensuring tests do not harm users or systems",
            "Maximizing test coverage at all costs",
            "Reducing testing time regardless of quality",
            "Ignoring user feedback during testing"
        ],
        answer: 0,
    },
    {
        section: "Ethics in Software Engineering",
        question: "What is the primary ethical concern with predictive policing algorithms?",
        options: [
            "Improved crime prevention",
            "Potential reinforcement of existing biases",
            "Reduced data storage requirements",
            "Increased system efficiency"
        ],
        answer: 1,
    },
    {
        section: "Ethics in Software Engineering",
        question: "Which principle ensures that AI systems are designed to respect user autonomy?",
        options: [
            "Autonomy",
            "Scalability",
            "Redundancy",
            "Throughput"
        ],
        answer: 0,
    },
    {
        section: "Ethics in Software Engineering",
        question: "What is the primary ethical concern with deepfake technology?",
        options: [
            "Improved video compression",
            "Potential for misinformation and harm",
            "Reduced data storage requirements",
            "Increased system performance"
        ],
        answer: 1,
    },
    {
        section: "Ethics in Software Engineering",
        question: "Which of the following is a key ethical principle in data handling?",
        options: [
            "Data minimization",
            "Maximizing data collection",
            "Ignoring user consent",
            "Increasing data storage"
        ],
        answer: 0,
    },
    {
        section: "Ethics in Software Engineering",
        question: "What is the primary ethical concern with AI-powered hiring systems?",
        options: [
            "Improved hiring efficiency",
            "Potential for biased decision-making",
            "Reduced data storage requirements",
            "Increased system performance"
        ],
        answer: 1,
    },
    {
        section: "Ethics in Software Engineering",
        question: "Which principle ensures that AI systems are designed to be inclusive?",
        options: [
            "Inclusivity",
            "Scalability",
            "Redundancy",
            "Throughput"
        ],
        answer: 0,
    },
    {
        section: "Ethics in Software Engineering",
        question: "What is the primary ethical concern with AI-powered surveillance systems?",
        options: [
            "Improved security",
            "Potential violation of privacy and civil liberties",
            "Reduced data storage requirements",
            "Increased system efficiency"
        ],
        answer: 1,
    },
    {
        section: "Ethics in Software Engineering",
        question: "Which of the following is a key ethical consideration in open-source software development?",
        options: [
            "Ensuring proper attribution and licensing",
            "Maximizing profit from the software",
            "Reducing code readability",
            "Ignoring user feedback"
        ],
        answer: 0,
    },
    {
        section: "Ethics in Software Engineering",
        question: "What is the primary ethical concern with AI-powered recommendation systems?",
        options: [
            "Improved user experience",
            "Potential for creating echo chambers and biases",
            "Reduced data storage requirements",
            "Increased system performance"
        ],
        answer: 1,
    },
    {
        section: "Ethics in Software Engineering",
        question: "Which principle ensures that AI systems are designed to be transparent and explainable?",
        options: [
            "Explainability",
            "Scalability",
            "Redundancy",
            "Throughput"
        ],
        answer: 0,
    },
    {
        section: "Ethics in Software Engineering",
        question: "What is the primary ethical concern with AI-powered decision-making in healthcare?",
        options: [
            "Improved diagnostic accuracy",
            "Potential for errors and lack of accountability",
            "Reduced data storage requirements",
            "Increased system efficiency"
        ],
        answer: 1,
    },
    {
        section: "Ethics in Software Engineering",
        question: "Which of the following is a key ethical consideration in software deployment?",
        options: [
            "Ensuring the software does not harm users or systems",
            "Maximizing deployment speed at all costs",
            "Reducing testing time regardless of quality",
            "Ignoring user feedback during deployment"
        ],
        answer: 0,
    },
    {
        section: "Ethics in Software Engineering",
        question: "What is the primary ethical concern with AI-powered content moderation systems?",
        options: [
            "Improved content filtering",
            "Potential for biased or unfair moderation",
            "Reduced data storage requirements",
            "Increased system performance"
        ],
        answer: 1,
    },
    {
        section: "Ethics in Software Engineering",
        question: "Which principle ensures that AI systems are designed to respect user privacy?",
        options: [
            "Privacy",
            "Scalability",
            "Redundancy",
            "Throughput"
        ],
        answer: 0,
    },
    {
        section: "Ethics in Software Engineering",
        question: "What is the primary ethical concern with AI-powered financial systems?",
        options: [
            "Improved financial efficiency",
            "Potential for biased or unfair financial decisions",
            "Reduced data storage requirements",
            "Increased system performance"
        ],
        answer: 1,
    },
];