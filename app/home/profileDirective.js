'use strict';

angular.module('myApp').directive('profile',
function () {
	return {
		restrict: 'A',
		scope: {},
		templateUrl: 'home/profile.html',
		link: function(scope, element, attrs) {
			scope.objective = "I'm a front-end developer with some middleware experience. I enjoy working" + 
				" on web applications that use a Javascript framework, such as AngularJS, and being on a team" + 
				" that utilizes an Agile methodology. I'm also comfortable with pair-programming as defined in XP Agile.";
			scope.education = {
				school: 'California Polytechnic State University - San Luis Obispo, CA',
				yearsAttended: '2002 - 2006',
				degree: 'Bachelor of Science in Computer Engineering'
			};

			scope.skills = [{
				title: "Front End",
				list: [{skill: "Javascript", proficiency: 3}, 
					{skill: "jQuery", proficiency: 3}, 
					{skill: "Backbone.js", proficiency: 2}, 
					{skill: "AngularJS", proficiency: 3},
					{skill: "RequireJS", proficiency: 1}, 
					{skill: "underscore.js", proficiency: 2}, 
					{skill: "HTML", proficiency: 3}, 
					{skill: "CSS", proficiency: 3},
					{skill: "SVG", proficiency: 1},
					{skill: "Ajax", proficiency: 2}, 
					{skill: "REST", proficiency: 2},
					{skill: "JSON", proficiency: 3}, 
					{skill: "D3.js", proficiency: 2},
					{skill: "DC.js", proficiency: 2},
					{skill: "Highcharts", proficiency: 1}, 
					{skill: "Lesscss", proficiency: 3},
					{skill: "Jasmine test framework", proficiency: 3},
					{skill: "Test-driven Development", proficiency: 2}]
			},{
				title: "Middleware & Back End",
				list: [{skill: "Java", proficiency: 3}, 
					{skill: "JDBC", proficiency: 2}, 
					{skill: "JUnit", proficiency: 2},
					{skill: "SQL", proficiency: 2},
					{skill: "PL/SQL", proficiency: 1},
					{skill: "Oracle", proficiency: 1},
					{skill: "Couchbase (NoSQL)", proficiency: 2},
					{skill: "Node.js", proficiency: 1}]
			},{
				title: "Tools",
				list: [{skill: "Git", proficiency: 2},
					{skill: "Subversion (SVN)", proficiency: 2},
					{skill: "CVS", proficiency: 2},
					{skill: "Apache Maven", proficiency: 1},
					{skill: "Jenkins CI", proficiency: 1},
					{skill: "Eclipse", proficiency: 2},
					{skill: "Webstorm", proficiency: 2},
					{skill: "VI", proficiency: 2},
					{skill: "SublimeText", proficiency: 3}, 
					{skill: "Jira", proficiency: 2},
					{skill: "Rally", proficiency: 2},
					{skill: "Pivotal Tracker", proficiency: 2}, 
					{skill: "Chrome Developer Tools", proficiency: 3},
					{skill: "Firebug", proficiency: 3},
					{skill: "jsFiddle", proficiency: 2},
					{skill: "Adobe Photoshop", proficiency: 2},
					{skill: "Adobe Illustrator", proficiency: 1}]
			}];

			// backend: add plsql-novice, 
			// tools: photoshop - intermediate, illustrator - novice

			scope.proficiencyLevels = {
				1: {
					value: "novice",
					desc: "You have the level of experience gained in a classroom and/or experimental scenarios or as a trainee on-the-job. You are expected to need help when performing this skill."
				},
				2: {
					value: "intermediate",
					desc: "You are able to successfully complete tasks in this competency as requested. Help from an expert may be required from time to time, but you can usually perform the skill independently."
				},
				3: {
					value: "advanced",
					desc: 'You can perform the actions associated with this skill without assistance. You are certainly recognized within your immediate organization as "a person to ask" when difficult questions arise regarding this skill.'
				}
			};
		}
	};
});