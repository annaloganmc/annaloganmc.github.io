// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-charleston-race-water-and-the-coming-storm",
          title: 'Charleston: Race, Water, and the Coming Storm',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/charleston/";
            },},{id: "books-the-overstory",
          title: 'The Overstory',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/overstory/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-ashleyville-salt-marsh-restoration",
          title: 'Ashleyville Salt Marsh Restoration',
          description: "Semi-automated tidal creek parameter extraction algorithm.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-south-carolina-nature-based-solutions-database",
          title: 'South Carolina Nature-Based Solutions Database',
          description: "Development of a nature-based solutions knowledge base for long-term performance monitoring in South Carolina.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-assessing-vulnerability-to-pfas-contamination-in-michigan",
          title: 'Assessing Vulnerability to PFAS Contamination in Michigan',
          description: "A clustering and spatial regression analysis of PFAS contamination across the state of Michigan.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-supervised-pixel-based-land-cover-classification",
          title: 'Supervised Pixel-Based Land Cover Classification',
          description: "Performing a land cover classification for Saginaw Woods using remote sensing imagery and field data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-electrifying-and-decarbonizing-the-uofm-bus-fleet",
          title: 'Electrifying and Decarbonizing the UofM Bus Fleet',
          description: "Creating a multi-criteria decision analysis tool to determine the optimal mix of electric, hybrid, and diesel buses to achieve net carbon goals.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-bioretention-animation",
          title: 'Bioretention Animation',
          description: "A short animation I created to depict the workings of a bioretention cell with an underdrain.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
