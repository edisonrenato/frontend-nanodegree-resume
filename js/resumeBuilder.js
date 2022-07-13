

// ===== MODEL =====

let model = {

  bio : {
          name : 'Edison Renato Pereira da Silva',
          role : 'Blockchain Developer',
          contacts : {
                mobile: '+55 21 99572 3111',
                email: 'edisonrenato@gmail.com',
                github: 'github.com/edisonrenato',
                twitter: 'twitter.com/edisonrnt',
                location: 'Netherlands'
                      },
          welcomeMessage: 'Peace everyone!',
          skills: ['JavaScript', 'Power BI','SQL', 'Blockchain', 'GoLang', 'Rust'],
          biopic: 'images/197x148.gif',
          display: function (){
            console.log("model.bio.display called");
            return model.bio;
          }
    },

  education : {
          schools: [{
               name: 'UFRJ',
               location: 'Rio de Janeiro, Brazil',
               degree: 'D.Sc.',
               majors: ['Industrial Engineering', 'Philosophy of Engineering'],
               dates: '20110308-20140404',
               url: 'www.producao.ufrj.br'
             },
             {
              name: 'UFRJ',
              location: 'Rio de Janeiro, Brazil',
              degree: 'M.Sc.',
              majors: ['Industrial Engineering', 'Philosophy of Engineering'],
              dates: '20090308-20110108',
              url: 'www.producao.ufrj.br'
            },
            {
              name: 'UFRJ',
              location: 'Rio de Janeiro, Brazil',
              degree: 'B.Sc.',
              majors: ['Industrial Engineering'],
              dates: '20040808-20081208',
              url: 'www.industrial.poli.ufrj.br'
             }],
          onlineCourses: [{
            title: 'Nanodegree Full Stack JavaScript Developer',
            school: 'Udacity',
            dates: '20220801-20221009',
            url: 'learn.udacity.com'
          },
          {
            title: 'Full Stack Blockchain Developer',
            school: 'Udacity',
            dates: '20221010-20221231',
            url: 'learn.udacity.com'
          }],
          display: function (){
          console.log("model.education.display called");
          return model.education;
          }
  },

  work : {
    jobs: [{
      employer: 'UFRJ',
      title: 'Adjunct Professor',
      location: 'Rio de Janeiro',
      dates: '20150224-in progress',
      description: 'Adjunct Professor Industrial Engineering',
    },
    {
      employer: 'UNIRIO',
      title: 'Adjunct Professor',
      location: 'Rio de Janeiro',
      dates: '20140101-20150223',
      description: 'Adjunct Professor Industrial Engineering'
    }],
    display: function (){
      console.log("model.work.display called");
      model.work.jobs;
    }
  },

  projects : {
    projects: [{
      title: 'LinkedIn Analyzer',
      dates: '20220901-in progress',
      description: 'Tool to analyze LinkedIn connections.',
      images: 'images/fry.jpg'
    },
    {
      title: 'Egressos System',
      dates: '20200101-in progress',
      description: 'Tool to analyze UFRJ Alumni',
      images: 'images/fry.jpg'
    }],
    display: function (){
      console.log("model.projects.display called");
      return model.projects.projects;
    }
  }
};





// ===== OCTOPUS =====
let octopus = {


init:function(){
  view.init();
  octopus.callBio();
  octopus.callEducation();
  octopus.callWork();
  octopus.callProjects();
},
callBio:function(){
  bio = model.bio.display();
  view.renderBio(bio);
},
callEducation:function(){
  education = model.education.display();
  view.renderEducation(education);
},

callWork:function(){
  work = model.work.display();
  view.renderWork(work);
},
callProjects:function(){
  projects = model.projects.display();
  view.renderProjects(projects);
}
};


// ===== VIEW =====

let view = {
init:function(){
  },
renderBio:function(bio){
  console.log("view.renderBio called");
//  a = document.getElementById('topContacts');
//  $( HTMLcontactGeneric).append("<li>Test</li>");
$(HTMLcontactGeneric).text($(HTMLcontactGeneric).text().replace("%contact%", "edisonrenato@gmail.com"));
  const element = $(HTMLcontactGeneric);
  const textToReplace = element.text();
  const newText = textToReplace.replace("%contact%", "edisonrenato@gmail.com");
  element.text(newText);
 console.log(HTMLcontactGeneric);


  },
renderEducation:function(education){
  console.log("view.renderEducation called");
  a = document.getElementById('education');
  console.log(a);
  },
renderWork:function(work){
  console.log("view.renderWork called");
  a = document.getElementById('workExperience');
  console.log(a);
  },
renderProjects:function(projects){
  console.log("view.renderProjects called");
  a = document.getElementById('projects');
  console.log(a);
  }

};



// ===== initiate the system =====
console.log('system initiated - begin');
octopus.init();
console.log('system initiated - end');
