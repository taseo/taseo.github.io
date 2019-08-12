// ------------------------------------------------------------------------
// : HTML BUILDING BLOCKS
// ------------------------------------------------------------------------

var HTMLHeaderName = '<h1 class="name">%data%</h1>',
    HTMLHeaderRole = '<div class="role">%data%</div>',

    HTMLIntroductionPortrait = '<img src="%data%" alt="Page author&apos;s portrait photography">',
    HTMLIntroductionButton = '<button id="get-in-touch-button" type="button" value="Get in touch"><span>Get in touch <i class="fa fa-envelope-o" aria-hidden="true"></i></span></button>',
    HTMLIntroductionEmail =  '<div class="email-introduction col-12">I\'m happy to hear from you. Reach me by email:</div><div class="email-address col-12"><a href="mailto:%data%">%data%</a></div>',

    HTMLEducationStart = '<div class="education-entry row"></div>',
    HTMLEducationDegree = '<div class="edu-degree col-12">%data%</div>',
    HTMLEducationTimeFrame = '<div class="edu-time col-6"><i class="fa fa-calendar-o" aria-hidden="true"></i>%data%</div>',
    HTMLEducationInstituion = '<div class="edu-institution col-6"><a href="%link%" target="_blank">%data%</a></div>',
    HTMLEducationMajor = '<div class="edu-major col-12">%data%</div>',

    HTMLCourseStart = '<div class="online-course-entry row"></div>',
    HTMLCourseName = '<div class="online-course-name col-12">%data%</div>',
    HTMLCourseProvider = '<div class="online-course-provider col-6"><a href="%link%" target="_blank">%data%</a></div>',
    HTMLCourseTimeFrame = '<div class="online-course-time col-6"><i class="fa fa-calendar-o" aria-hidden="true"></i>%data%</div>',

    HTMLEmploymentStart = '<div class="employment-entry row"></div>',
    HTMLEmploymentPosition = '<div class="employment-position col-12">%data%</div>',
    HTMLEmploymentEmployer = '<div class="employment-employer col-6"><a href="%link%" target="_blank">%data%</a></div>',
    HTMLEmploymentTimeFrame = '<div class="employment-time col-6"><i class="fa fa-calendar-o" aria-hidden="true"></i>%data%</div>',
    HTMLEmploymentDescription = '<div class="employment-description col-12">%data%</div>',

    HTMLSkillsTechnicalEntry = '<tr class="skills-tech-level"></tr>',
    HTMLSkillsTechnicalName = '<td>%data%</td>',
    HTMLSkillsTechnicalLevel = '<td><div class="%data% %color%"></div></td>',

    HTMLSkillsLanguageStart = '<ul class="skills-languages-list"></ul>',
    HTMLSkillsLanguagesLang = '<li class="skills-languages-entry">%data%</li>',

    HTMLSkillsSoftStart = '<ul class="skills-soft-list"></ul>',
    HTMLSkillsSoftEntry = '<li class="skills-soft-entry"><span class="%class%">%data%</span></li>',

    HTMLSkillsOtherStart = '<ul class="skills-other-list"></ul>',
    HTMLSkillsOtherEntry = '<li class="skills-other-entry"><i class="%icon%" aria-hidden="true"></i>%data%</li>',

    HTMLProjectsStart = '<div class="projects-list row">',
    HTMLProjectsEntry = '<div class="projects-entry col-4-card row">',
    HTMLProjectsImage = '<div><img src="%src%" alt="%data%"></div>',
    HTMLProjectsTitle = '<div class="col-8 projects-title"><h3>%data%</h3></div>',
    HTMLProjectsLink = '<div class="col-4 projects-link"><a href="%data%" target="_blank">source</a></div>',
    HTMLProjectsType = '<div class="col-12 projects-type">%data%</div>',
    HTMLProjectsDescription = '<div class="col-12 projects-description"><p>%data%</p></div>',
    HTMLProjectsSkillsStart = '<div class="col-12 projects-skills-start">',
    HTMLProjectsSkillsIcon = '<div class="col-3 projects-icon"><i class="fa fa-wrench" aria-hidden="true"></i></div>',
    HTMLProjectsSkills = '<div class="col-9 projects-skills"></p>%data%</p></div>',

    HTMLFooterSocialMediaStart = '<ul class="footer-social-media-list"></ul>',
    HTMLFooterSocialMediaEntry = '<li><a href="%link%" target="_blank"><i class="%icon%" aria-hidden="true"></i></a></li>',
    HTMLFooterSocialMediaEntryEmail = '<li><a id="emailLink" href="#"><i class="%icon%" aria-hidden="true"></i></a></li>',

    HTMLFooterNavigationStart = '<ul class="footer-navigation-placeholder"></ul>',
    HTMLFooterNavigationEntry = '<li><a id="arrow-up" href="#header"><i class="fa fa-arrow-up" aria-hidden="true"></i></a></li>',

    HTMLFooterText = '<p>%text%</p><p>Last update: %time%</p>';

// ------------------------------------------------------------------------
// : DATA SOURCE
// ------------------------------------------------------------------------

var about = {
  
  me: {
    firstName: 'Arturs',
    lastName: 'Ipatenko',
    role: 'Web Developer',
    portrait: 'img/bio_image.jpg',
    contactInformation: {
      email: 'arturs.ipatenko',
      domainName: 'gmail',
      domain: '.com'
    },
    introduction: [
      '<p>I&apos;m web developer, introvert (INTJ), runner and minimalist</p>',
      '<p>I&apos;m fascinated with <a href="https://www.flickr.com/photos/artturi" target="_blank">photography</a>, self-improvement and electronics</p>',
      '<p>I speak three languages; English, Russian and Latvian</p>',
      '<p>My favorite novel is <a lang="ja" href="https://en.wikipedia.org/wiki/Norwegian_Wood_%28novel%29" target="_blank">ノルウェイの森</a></p>'
    ]
  },
  
  education: {
    
    eduInstitutions: [
      {
        name: 'Riga Tehnical University',
        location: 'Riga, Latvia',
        degree: 'Bachelor Degree in electronics and communications',
        timeFrame: 'September 2019 - Present',
        major: [''],
        url: 'https://www.rtu.lv/en'
      },
      {
        name: 'Udacity',
        location: 'Online',
        degree: 'Mobile Web Specialist',
        timeFrame: 'February 2018 - August 2018',
        major: ['Web performance', 'accessibility', 'progressive web apps'],
        url: 'https://graduation.udacity.com/confirm/NJ9MHJVT'
      },
      {
        name: 'Turiba University',
        location: 'Riga, Latvia',
        degree: 'Professional Bachelor Degree in Business Administration',
        timeFrame: 'Dropped (completed 75%)',
        major: ['Management', 'finance'],
        url: 'https://www.turiba.lv/en/'
      },
      {
        name: 'Haaga-Helia UAS',
        location: 'Porvoo, Finland',
        degree: 'Erasmus Exchange',
        timeFrame: 'August 2009 - May 2010',
        major: ['Project management', 'marketing research', 'cost accounting'],
        url: 'https://www.haaga-helia.fi/en'
      }
    ],
    
    onlineCourses: [
      {
        provider: 'Udacity',
        course: 'Google Developer Challenge Scholarship: Mobile Web',
        timeFrame: 'January 2018',
        url: 'https://www.udacity.com'
      },
      {
        provider: 'Udacity',
        course: 'Website Performance Optimization',
        timeFrame: 'November 2017',
        url: 'https://www.udacity.com/course/website-performance-optimization--ud884'
      },
      {
        provider: 'Udemy',
        course: 'Vue JS 2 - The Complete Guide',
        timeFrame: 'August 2017',
        url: 'https://www.udemy.com/vuejs-2-the-complete-guide'
      }, 
      {
        provider: 'Udacity',
        course: 'How to Use Git and GitHub',
        timeFrame: 'March 2017',
        url: 'https://www.udacity.com/course/how-to-use-git-and-github--ud775'
      }, 
      {
        provider: 'Udacity',
        course: 'Object-Oriented JavaScript',
        timeFrame: 'September 2016',
        url: 'https://www.udacity.com/course/object-oriented-javascript--ud015'
      },
      {
        provider: 'Codecademy',
        course: 'Learn Sass',
        timeFrame: 'July 2016',
        url: 'https://www.codecademy.com/learn/learn-sass'
      },
      {
        provider: 'Udemy',
        course: 'The Web Developer Bootcamp',
        timeFrame: 'July 2016',
        url: 'https://www.udemy.com/the-web-developer-bootcamp'
      },
      {
        provider: 'Udacity',
        course: 'JavaScript Basics',
        timeFrame: 'May 2016',
        url: 'https://www.udacity.com/course/javascript-basics--ud804'
      },
      {
        provider: 'Udacity',
        course: 'Responsive Web Design Fundamentals',
        timeFrame: 'May 2016',
        url: 'https://www.udacity.com/course/responsive-web-design-fundamentals--ud893'
      },
      {
        provider: 'Udacity',
        course: 'Intro to HTML and CSS',
        timeFrame: 'May 2016',
        url: 'https://www.udacity.com/course/intro-to-html-and-css--ud304'
      },
      {
        provider: 'Udemy',
        course: 'Build Responsive Real World Websites with HTML5 and CSS3',
        timeFrame: 'April 2016',
        url: 'https://www.udemy.com/design-and-develop-a-killer-website-with-html5-and-css3'
      }
    ]
  },
  
  skills: {

    technical: [
      {
        tech: 'Javascript',
        skillLevel: 3,
        color: 'skill-dot-green'
      },
      {
        tech: 'Typescript',
        skillLevel: 3,
        color: 'skill-dot-green'
      },
      {
        tech: 'Python',
        skillLevel: 2,
        color: 'skill-dot-green'
      },
      {
        tech: 'C',
        skillLevel: 1,
        color: 'skill-dot-green'
      },
      {
        tech: 'Bash',
        skillLevel: 1,
        color: 'skill-dot-green'
      },
      {
        tech: 'HTML',
        skillLevel: 3,
        color: 'skill-dot-orange'
      },
      {
        tech: 'CSS',
        skillLevel: 3,
        color: 'skill-dot-orange',
      },
      {
        tech: 'SCSS / LESS',
        skillLevel: 3,
        color: 'skill-dot-orange',
      },
      {
        tech: 'Angular',
        skillLevel: 3,
        color: 'skill-dot-asbestos'
      },
      {
        tech: 'Webpack',
        skillLevel: 2,
        color: 'skill-dot-asbestos'
      },
      {
        tech: 'Karma / Jasmine',
        skillLevel: 2,
        color: 'skill-dot-asbestos'
      },
      {
        tech: 'GIT',
        skillLevel: 2,
        color: 'skill-dot-blue'
      },
      {
        tech: 'Linux',
        skillLevel: 2,
        color: 'skill-dot-blue'
      }
    ],

    languages: [
      {
        language: 'Latvian',
        level: 'Native'
      },
      {
        language: 'Russian',
        level: 'Native'
      },
      {
        language: 'English',
        level: 'Fluent'
      }
    ],

    softSkills: [
      {
        skill: 'Problem solving',
        color: 'skills-soft-blue'
      },
      {
        skill: 'Critical thinking',
        color: 'skills-soft-blue'
      },
      {
        skill: 'Ability to work under pressure',
        color: 'skills-soft-red'
      },
      {
        skill: 'Adaptability',
        color: 'skills-soft-red'
      },
      {
        skill: 'Open-mindedness',
        color: 'skills-soft-green'
      },
      {
        skill: 'Active listening',
        color: 'skills-soft-green'
      },
      {
        skill: 'Self-starter',
        color: 'skills-soft-green'
      }
    ],

    otherSkills: [
      {
        skill: 'Data Analysis',
        icon: 'fa fa-pie-chart'
      },
      {
        skill: 'Driving license (B category)',
        icon: 'fa fa-car'
      }
    ]
  },

  employmentHistory: [
    {
      position: 'Front-End Developer',
      employer: 'Visma',
      url: 'https://www.visma.com',
      timeFrame: 'February 2018 &ndash; Present',
      desciption: 'Senior developer, building responsive and accessible web applications'
    },
    {
      position: 'Front-End Developer',
      employer: 'Dynatech',
      url: 'https://dynatech.lv',
      timeFrame: 'August 2016 &ndash; January 2018',
      desciption: 'Maintained several projects for on-line travel agency, assisted team lead with managing team’s workload'
    },
    {
      position: 'Client Service / Report Center Executive',
      employer: 'Nielsen Latvia',
      url: 'https://www.nielsen.com',
      timeFrame: 'January 2014 &ndash; June 2016',
      desciption: 'Managed relations with several large, international companies in Baltic market and handled report preparation'
    }
  ],

  projects: [
    {
      type: 'Software',
      name: 'Omnifood',
      description: 'Front page for fictional food delivery company that uses responsive layout (desktop-first) with floats to position elements; design is based on Udemy\'s course',
      image: 'img/omnifood.jpg',
      imageDescription: 'Omnifood front&ndash;page screenshot',
      url: 'projects/omnifood/omnifood.html',
      skills: ['HTML', 'CSS', 'Javascript', 'JQuery']
    },
    {
      type: 'Software',
      name: 'The Brighton Times',
      description: 'Front page for fictional local news site that uses responsive layout (mobile-first) and flexbox to position elements; original design is based on Udacity&apos;s course',
      image: 'img/the_brighton_times.jpg',
      imageDescription: 'The Brighton Times front-page screenshot',
      url: 'projects/the-brighton-times/the-brighton-times.html',
      skills: ['HTML', 'CSS', 'Javascript']
    },
    {
      type: 'Software',
      name: 'Frogger Clone',
      description: 'Arcade game project based on Udacity\'s Javascript course, built using object-oriented programming concepts',
      image: 'img/frogger-clone.jpg',
      imageDescription: 'Frogger Clone page screenshot',
      url: 'projects/frogger-clone/frogger-clone.html',
      skills: ['HTML', 'SCSS', 'Javascript']
    },
    {
      type: 'Hardware',
      name: 'Plant monitor',
      description: 'Arduino Leonardo based plant health monitor that reads temperature, humidity, lightning and soil moisture',
      image: 'img/plant_monitor.jpg',
      imageDescription: 'Plant monitor\'s photo',
      url: 'https://github.com/taseo/plant-monitor',
      skills: ['Arduino', 'C']
    }
  ],

  markers: [
    {
      title: 'Riga',
      latitute: 56.9715833,
      longtitute: 23.9890818,
      icon: 'https://maps.google.com/mapfiles/ms/icons/purple.png'
    },
    {
      title: 'Helsinki',
      latitute: 60.1641013,
      longtitute: 24.900187,
      icon: 'https://maps.google.com/mapfiles/ms/icons/red.png'
    },
    {
      title: 'Porvoo',
      latitute: 60.2997635,
      longtitute: 25.4585948,
      icon: 'https://maps.google.com/mapfiles/ms/icons/red.png'
    },
    {
      title: 'Tallinn',
      latitute: 59.4250275,
      longtitute: 24.6682023,
      icon: 'https://maps.google.com/mapfiles/ms/icons/red.png'
    },
    {
      title: 'Vilnius',
      latitute: 54.7002886,
      longtitute: 25.112851,
      icon: 'https://maps.google.com/mapfiles/ms/icons/red.png'
    },
    {
      title: 'Stockholm',
      latitute: 59.326242,
      longtitute: 17.8474649,
      icon: 'https://maps.google.com/mapfiles/ms/icons/red.png'
    },
    {
      title: 'Saint Petersburg',
      latitute: 59.9174925,
      longtitute: 30.0448876,
      icon: 'https://maps.google.com/mapfiles/ms/icons/red.png'
    },
    {
      title: 'Prague',
      latitute: 50.0598058,
      longtitute: 14.3255422,
      icon: 'https://maps.google.com/mapfiles/ms/icons/red.png'
    },
    {
      title: 'Milano',
      latitute: 45.4628328,
      longtitute: 9.1076928,
      icon: 'https://maps.google.com/mapfiles/ms/icons/red.png'
    }
  ],

  footerLinks: {

    socialMedia: [
      {
        icon: 'fa fa-instagram',
        url: 'https://www.instagram.com/artursipatenko',
        type: 'media'
      },
      {
        icon: 'fa fa-github',
        url: 'https://github.com/taseo',
        type: 'media'
      },
      {
        icon: 'fa fa-twitter',
        url: 'https://twitter.com/arttyri',
        type: 'media'
      },
      {
        icon: 'fa fa-flickr',
        url: 'https://www.flickr.com/photos/artturi',
        type: 'media'
      },
      {
        icon: 'fa fa-envelope-o',
        url: '#',
        type: 'email'
      }
    ],

    textFooter: [
      {
        text: 'Made with love in Riga',
        lastUpdate: 'August 12, 2019'
      }
    ]
  }
};

// ------------------------------------------------------------------------
// : CACHED DOM ELEMENTS
// ------------------------------------------------------------------------

var $header = $('#header'),
    $primaryEmailLocation = $header.find('.primary-email-location'),
    $arrowUp = $header.find('.scroll-up'),
    $arrowButton = $arrowUp.find('#arrow-up')

// ------------------------------------------------------------------------
// : FUNCTIONS TO CONSTRUCT PAGE
// ------------------------------------------------------------------------

// Header

function displayIntroductioon(me) {

  var $headerTitle = $header.find('.header-title'),
      $portraitImage = $header.find('.portrait-image'),
      $introductionText = $header.find('.introduction-text'),
      $getInTouchButton = $header.find('.get-in-touch-button');

  $headerTitle.append(HTMLHeaderName.replace('%data%', me.firstName + ' ' + me.lastName));
  $headerTitle.append(HTMLHeaderRole.replace('%data%', me.role));

  $portraitImage.append(HTMLIntroductionPortrait.replace('%data%', me.portrait));

  for (var paragprah in me.introduction) {

    if(me.introduction.hasOwnProperty(paragprah)) {
      $introductionText.append(me.introduction[paragprah]);
    }
  }

  $getInTouchButton.append(HTMLIntroductionButton);
};

// Education

function displayEduInstitutions(education) {

  var $education = $('#education');
  
  for(var edu in education) {

    if(education.hasOwnProperty(edu)) {      
      $education.append(HTMLEducationStart);

      var $eduEntryLast = $education.find('.education-entry:last'),
          eduInst = education[edu].name + ' (' + education[edu].location + ')',
          numberOfSubjects = education[edu].major.length;

      $eduEntryLast.append(HTMLEducationDegree.replace('%data%', education[edu].degree));
      $eduEntryLast.append(HTMLEducationInstituion.replace('%link%', education[edu].url).replace('%data%', eduInst));
      $eduEntryLast.append(HTMLEducationTimeFrame.replace('%data%', education[edu].timeFrame));

      // Checks how many majors/subjects are listed in the array and displays the result accordingly

      if (numberOfSubjects <= 1) {
        $eduEntryLast.append(HTMLEducationMajor.replace('%data%', education[edu].major[numberOfSubjects - 1]));
      } else if (numberOfSubjects <= 2 ) {
        $eduEntryLast.append(HTMLEducationMajor.replace('%data%', education[edu].major[numberOfSubjects - 2] + ' and ' + education[edu].major[numberOfSubjects - 1]));
      } else {
        var manySubjects = '';

        for (i = 0; i < numberOfSubjects - 1; i++ ) {
          if (i === numberOfSubjects - 2) {
            manySubjects = manySubjects + education[edu].major[i] + ' ';
          } else {
            manySubjects = manySubjects + education[edu].major[i] + ', ';
          }
        }

        manySubjects = manySubjects + 'and ' + education[edu].major[numberOfSubjects - 1];

        $eduEntryLast.append(HTMLEducationMajor.replace('%data%', manySubjects));
      }
    }
  }
};

// Courses

function displayCourses(courses) {

  var $courses = $('#courses');
  
  for(var course in courses) {

    if(courses.hasOwnProperty(course)) {
      $courses.append(HTMLCourseStart);

      var $courseEntryLast = $courses.find('.online-course-entry:last');

      $courseEntryLast.append(HTMLCourseName.replace('%data%', courses[course].course));
      $courseEntryLast.append(HTMLCourseProvider.replace('%link%', courses[course].url).replace('%data%', courses[course].provider));
      $courseEntryLast.append(HTMLCourseTimeFrame.replace('%data%', courses[course].timeFrame));
    }
  }
};

// Technical Skills

function displayTecknicalSkills(skills) {

  var $skills = $('#technical-skills');
  
  for (var skill in skills) {

    if(skills.hasOwnProperty(skill)) {
      $skills.append(HTMLSkillsTechnicalEntry);

      var $techSkillLast = $skills.find('.skills-tech-level:last'),
          maxSkillLevel = 4,
          currentSkillLevel = skills[skill].skillLevel;

      $techSkillLast.append(HTMLSkillsTechnicalName.replace('%data%', skills[skill].tech));

      for (i = 0; i < currentSkillLevel; i++) {
        $techSkillLast.append(HTMLSkillsTechnicalLevel.replace('%data%', 'round').replace('%color%', skills[skill].color));
      }

      for (i = 0; i < (maxSkillLevel - currentSkillLevel); i++) {
        $techSkillLast.append(HTMLSkillsTechnicalLevel.replace('class="%data% %color%"', ''));
      }
    }
  }
};

// Languages

function displayLanguage(languages) {

  var $languages = $('#languages');
  
  $languages.append(HTMLSkillsLanguageStart);

  for (var lang in languages) {

    if(languages.hasOwnProperty(lang)) {
      $languages
        .find('.skills-languages-list:last')
        .append(HTMLSkillsLanguagesLang.replace('%data%', languages[lang].language + ' (' + languages[lang].level + ')'));
    }
  }
};

// Soft Skills

function displaySoftSkills(softSkills) {

  var $softSkills = $('#soft-skills');
  
  $softSkills.append(HTMLSkillsSoftStart);

  for (var softSkill in softSkills) {

    if(softSkills.hasOwnProperty(softSkill)) {
      $softSkills
        .find('.skills-soft-list:last')
        .append(HTMLSkillsSoftEntry.replace('%class%', softSkills[softSkill].color).replace('%data%', softSkills[softSkill].skill));
    }
  }
};

// Other Skills

function displayOtherSkills(otherSkills) {

  var $otherSkills = $('#other-skills');
  
  $otherSkills.append(HTMLSkillsOtherStart);

  for(var otherSkill in otherSkills) {

    if(otherSkills.hasOwnProperty(otherSkill)) {
      $otherSkills
        .find('.skills-other-list:last')
        .append(HTMLSkillsOtherEntry.replace('%icon%', otherSkills[otherSkill].icon).replace('%data%', otherSkills[otherSkill].skill));
    }
  }
};

// Employment

function displayEmployment(jobs) {

  var $employment = $('#employment');
  
  for (var job in jobs) {

    if(jobs.hasOwnProperty(job)) {
      $employment.append(HTMLEmploymentStart);

      var $lastEmployment = $employment.find('.employment-entry:last');
      
      $lastEmployment.append(HTMLEmploymentPosition.replace('%data%', jobs[job].position));
      $lastEmployment.append(HTMLEmploymentEmployer.replace('%link%', jobs[job].url).replace('%data%', jobs[job].employer));
      $lastEmployment.append(HTMLEmploymentTimeFrame.replace('%data%', jobs[job].timeFrame));
      $lastEmployment.append(HTMLEmploymentDescription.replace('%data%', jobs[job].desciption));
    }
  }
};

// Projects

function displayProjects(projects) {

  var $projects = $('#projects')

  $projects.append(HTMLProjectsStart);

  for (var project in projects) {

    if(projects.hasOwnProperty(project)) {  
      $projects
        .find('.projects-list')
        .append(HTMLProjectsEntry);

      var $lastProject = $projects.find('.projects-entry:last'),
          numberOfSkills = projects[project].skills.length,
          skillsUsed = '';
      
      $lastProject.append(HTMLProjectsImage.replace('%src%', projects[project].image).replace('%data%', projects[project].imageDescription));
      $lastProject.append(HTMLProjectsTitle.replace('%data%', projects[project].name));
      $lastProject.append(HTMLProjectsLink.replace('%data%', projects[project].url));
      $lastProject.append(HTMLProjectsType.replace('%data%', projects[project].type));
      $lastProject.append(HTMLProjectsDescription.replace('%data%', projects[project].description));
      $lastProject.append(HTMLProjectsSkillsStart);

      for (i = 0; i < numberOfSkills; i++) {

        if (i === numberOfSkills - 1) {
          skillsUsed = skillsUsed + projects[project].skills[i];
        } else if (i === numberOfSkills - 2) {
          skillsUsed = skillsUsed + projects[project].skills[i] + ' and ';
        } else {
          skillsUsed = skillsUsed + projects[project].skills[i] + ', ';
        }
      }

      $lastProject
        .find('.projects-skills-start:last')
        .append(HTMLProjectsSkillsIcon)
        .append(HTMLProjectsSkills.replace('%data%', skillsUsed));
    }
  }
};

// Map

function initMap(markers) {

  var startLatLng = {
    lat: 54.7002886,
    lng: 25.112851
  };

  var map = new google.maps.Map(document.getElementById('map'), {
    center: startLatLng,
    scrollwheel: false,
    zoom: 4
  });

  for (var mark in markers) {

    if(markers.hasOwnProperty(mark)) {
      
      var marker = new google.maps.Marker({
        map: map,
        position: {
          lat: markers[mark].latitute,
          lng: markers[mark].longtitute
        },
        title: markers[mark].title,
        icon: markers[mark].icon
      });

      marker.info = new google.maps.InfoWindow({
        content: '<strong>' + markers[mark].title + '</strong>'
      });

      google.maps.event.addListener(marker, 'click', function() {
        
        this
          .info
          .open(map, this);
      });
    }
  }
}

// Footer

function displayFooter(links) {

  var $footer = $('#footer'),
      $footerMedia = $footer.find('.footer-media'),
      $footerText = $footer.find('.footer-text'),
      socialMedia = links.socialMedia;
  
  $footerMedia.append(HTMLFooterSocialMediaStart);

  for(var link in socialMedia) {

    if(socialMedia.hasOwnProperty(link)) {
      
      var $lastMediaLink = $footer.find('.footer-social-media-list:last');
      
      if (links.socialMedia[link].type === 'email') {
        $lastMediaLink.append(HTMLFooterSocialMediaEntryEmail.replace('%icon%', socialMedia[link].icon));
      } else {
        $lastMediaLink.append(HTMLFooterSocialMediaEntry.replace('%link%', socialMedia[link].url).replace('%icon%', socialMedia[link].icon));
      }
    }
  }

  $footerText.append(HTMLFooterText.replace('%text%', links.textFooter[0].text).replace('%time%', links.textFooter[0].lastUpdate));

  // Add listener for email link
  
  $footer.find('#emailLink').on('click', function (e) {
    e.preventDefault();
    
    window.location = 'mailto:' + assemleEmail();
  });
};

// ------------------------------------------------------------------------
// : INITIALIZATION OF FUNCTIONS
// ------------------------------------------------------------------------

displayIntroductioon(about.me);
displayEduInstitutions(about.education.eduInstitutions);
displayCourses(about.education.onlineCourses);
displayTecknicalSkills(about.skills.technical);
displayLanguage(about.skills.languages);
displaySoftSkills(about.skills.softSkills)
displayOtherSkills(about.skills.otherSkills);
displayEmployment(about.employmentHistory);
displayProjects(about.projects);
displayFooter(about.footerLinks);

// ------------------------------------------------------------------------
// : EMAIL ASSEMBLER
// ------------------------------------------------------------------------

// Listener

var $getInTouchButton = $('#get-in-touch-button'),
    contactButtonCounter = 0;

$getInTouchButton.one('click', displayEmail());

$getInTouchButton.on('click', function () {
  
  if (contactButtonCounter % 2 === 0) {
    $primaryEmailLocation.show('slow');
    contactButtonCounter += 1;
  } else {
    $primaryEmailLocation.hide('slow');
    contactButtonCounter += 1;
  }
});

// Displays Email

function displayEmail() {
  $primaryEmailLocation.append(HTMLIntroductionEmail.replace(/%data%/g, assemleEmail())).hide();
}

// Assembles Email

function assemleEmail() {

  var aboutMe = about.me,
      emailAdress = aboutMe.contactInformation.email + '@' + aboutMe.contactInformation.domainName + aboutMe.contactInformation.domain;
  
  return emailAdress;
}

// ------------------------------------------------------------------------
// : NAVIGATION
// ------------------------------------------------------------------------

// Displays scroll up arrow when scrolled certain amount from top

$(document).on('scroll', function() {
  
  if ($(document).scrollTop() >= screen.height) {
    $arrowUp.fadeIn('slow', function() {
      
      $arrowUp.removeClass('scroll-up-hidden');
    });
  } else {
    $arrowUp.fadeOut('slow', function() {
      
      $arrowUp.addClass('scroll-up-hidden');
    });
  }
});

// Scrolls top when pressed on top arrow

$arrowButton.click(function() {
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top -120
  }, 500);
  
  return false;
});

// ------------------------------------------------------------------------
// : MAP
// ------------------------------------------------------------------------

if(window.google) {
  initMap(about.markers);
} else {

  var waitForMap = setInterval(function() {

    if(window.google) {
      initMap(about.markers);
      clearInterval(waitForMap);
    }
  }, 100);
}
