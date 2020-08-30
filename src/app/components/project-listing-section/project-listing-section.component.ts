import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment.keys';

@Component({
	selector: 'app-project-listing-section',
	templateUrl: './project-listing-section.component.html',
	styleUrls: ['./project-listing-section.component.css']
})
export class ProjectListingSectionComponent implements OnInit {

	DEFAULT_PROJECT_SHOWN_AMOUNT = 6;

	repositories: object[];
	colourMap: Map<string, string> = new Map<string, string>();
	totalProjectsShown: number = this.DEFAULT_PROJECT_SHOWN_AMOUNT;
	projectNameToLanguageListMap: Map<string, string[]> = new Map<string, string[]>();
	buttonText: string;

	constructor(private http: HttpClient) {
		const requestOptions = {
			headers: new HttpHeaders({
				'Authorization': `token ${environment.GITHUB_TOKEN}`
			})
		}
		let apiKeyReq = http.get(" https://api.github.com/user/repos", requestOptions)
		apiKeyReq.subscribe(data => {
			let dataToCleanse = data as object[]
			this.repositories = dataToCleanse.filter(proj => proj["owner"]["login"] === "ShaneCreedon");
			this.getRepositoryInformation(http,requestOptions);
		})

		this.colourMap.set("Java", "#00ba1a");
		this.colourMap.set("TypeScript", "#028eb5");
		this.colourMap.set("Haskell", "#ff5613");
		this.colourMap.set("JavaScript", "#cdb400");
		this.colourMap.set("CSS", "#cc63ff");
		this.colourMap.set("Python", "#94d649");
		this.colourMap.set("HTML", "#ff6565");
		this.colourMap.set("Shell", "#7a8c14");
		this.colourMap.set("PHP", "#54d8e2");

		this.buttonText = "Click to show more projects";
	}

	private getRepositoryInformation(http, requestOptions) {
		this.repositories.map(element => {
			let languagesForProjectUrl = element["languages_url"];
			let languagesForProjectReq = http.get(languagesForProjectUrl, requestOptions);
			languagesForProjectReq.subscribe(data => {
				let languageListForProj: string[] = Object.keys(data) as string[];
				this.projectNameToLanguageListMap.set(element["name"], languageListForProj);
			})
		});
	}

	ngOnInit(): void {
	}

	getLanguage(language: string, index: number) {
		let elem = document.querySelector('.card-language-' + language + "-" + index) as HTMLElement;
		if (this.colourMap.has(language)) {
			elem.style.color = this.colourMap.get(language);
		} else {
			elem.style.color = this.getRandomColour();
		}
		return language;
	}

	showMoreOrLessProjects() {
		if (this.totalProjectsShown == this.repositories.length) {
			this.totalProjectsShown = this.DEFAULT_PROJECT_SHOWN_AMOUNT;
			this.buttonText = "Click to show more projects";
		} else {
			this.totalProjectsShown = this.repositories.length;
			this.buttonText = "Click to show less";
		}
	}

	getRandomColour() {
		let letters = '0123456789ABCDEF';
		let colour = '#';
		for (let i = 0; i < 6; i++) {
			colour += letters[Math.floor(Math.random() * 16)];
		}
		return colour;
	}

	adjustRepoName(repoName: string) {
		return repoName.split("-").join(" ");
	}

}
