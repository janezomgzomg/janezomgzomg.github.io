// import PageHeaderModule from 'components/page-header/page-header.module.js';

function init() {
  // setDefaultView();
  // ();
  // console.log(PageHeaderModule);
}

// function openLink(link) {
//   var LINKS = {
//     github: {
//       value: 'https://github.com/janezomgzomg'
//     },
//     linkedin: {
//       value: 'https://www.linkedin.com/in/jane-mendonca-ab218a43/'
//     }
//   };
//   var win = window.open(LINKS[link].value, '_blank');
// }


// function setDefaultView() {
//   setView('resume');
// }
// function clickMenuTab(tab) {
//   clearCurrentView().then(() => {
//     setView(tab);
//   });
// }
// function setView(view) {
//   setTab(view);
//   setSection(view);
// }
// function setSection(view) {
//   document.getElementById(`section-${view}`).classList.add('selected');
//   if(view === 'resume') {
//     renderResume();
//   }
// }
// function setTab(view) {
//   document.getElementById(`menu-${view}`).classList.add('selected');
// }

// function clearCurrentView() {
//   return new Promise((resolve, reject) => {
//     let elements = [...document.getElementsByClassName('selected')];
//     for(let i = 0; i<elements.length; i++) {
//       elements[i].classList.remove('selected');
//     }
//     return resolve();
//   });
// }