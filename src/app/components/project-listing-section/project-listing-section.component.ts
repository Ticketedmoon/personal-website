import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-project-listing-section',
  templateUrl: './project-listing-section.component.html',
  styleUrls: ['./project-listing-section.component.css']
})
export class ProjectListingSectionComponent implements OnInit {

  DEFAULT_PROJECT_SHOWN_AMOUNT = 6;

  repositories : object[];
  colourMap: Map<string, string> = new Map<string, string>();
  totalProjectsShown: number = this.DEFAULT_PROJECT_SHOWN_AMOUNT;
  projectNameToLanguageListMap: Map<string, string[]> = new Map<string, string[]>();
  buttonText: string;

  constructor(private http: HttpClient) {
    let req = http.get("https://api.github.com/users/ShaneCreedon/repos");
    req.subscribe(data => {
      this.repositories = data as object[];
      this.repositories.map(element => {
        let languagesForProjectUrl = element["languages_url"];
        let languagesForProjectReq = http.get(languagesForProjectUrl);
        languagesForProjectReq.subscribe(data => {
          let languageListForProj: string[] = Object.keys(data);
          this.projectNameToLanguageListMap.set(element["name"], languageListForProj);
        })
      })
    });

    this.colourMap.set("Java", "#00ba1a");
    this.colourMap.set("TypeScript", "#00ade0");
    this.colourMap.set("Haskell", "#ff5613");
    this.colourMap.set("JavaScript", "#cdb400");
    this.colourMap.set("CSS", "#cc63ff");
    this.colourMap.set("Python", "#94d649");
    this.colourMap.set("HTML", "#ff6565");
    this.colourMap.set("Shell", "#c4e212");
    this.colourMap.set("PHP", "#12d1e2");

    this.buttonText = "Click to show more projects";
  }

  ngOnInit(): void {}

  getLanguage(language: string, index: number) {
    let elem = document.querySelector('.card-language-' + index) as HTMLElement;
    if (this.colourMap.has(language)) {
      elem.style.color = this.colourMap.get(language);
    } else {
      elem.style.color = this.getRandomColour();
    }
    return language;
  }

  getLanguagesFromMap(projectName: string) {
    return this.projectNameToLanguageListMap.get(projectName);
  }

  clickProjectButton() {
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
