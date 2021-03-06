import { Injectable, Output, EventEmitter } from '@angular/core';
import { HelperServiceService } from '../helpers/helper-service.service'
import { Card } from 'src/app/components/l2/content/primary-container/cards/card/card.model';

import * as $config from '../../configuration/config.js'
import * as $ from 'node_modules/jquery/dist/jquery';


@Injectable({
  providedIn: 'root'
})
export class DomOpsService {
  start: number;
  element: HTMLElement;
  createRepoWidgetCreated: boolean = false;
  commandCardCounter: number = 1;
  widgets = $("#widgets"); 
  @Output() commandPromptEnteredWithValue = new EventEmitter<boolean>();
  @Output() commandPromptEnteredEmpty = new EventEmitter<boolean>();
  @Output() intentIdentified = new EventEmitter<boolean>();
  @Output() widgetIdentified = new EventEmitter<{}>();
  @Output() repeatRequested = new EventEmitter<string>();

  constructor(private helper: HelperServiceService) {}

  displayIntentBox(intent) {
    const intentBox = document.getElementById("intentBox");
    if (!this.isVisible(intentBox)) {
      intentBox.classList.remove("hide");
      this.intentIdentified.emit();
    }
    $("#intentName").text(`${$config.intentSlugToOperations[intent].intentMessage} [slug: ${intent}].`);
  }

  showEmptyCommandMessage(message) {
    $("#randomModal").text(message);
    $("#emptyCommandMsgDisplayer").click();
    this.commandPromptEnteredEmpty.emit();
  }

  populateRecastData(widgetName, recastResponse) {
    const operation = $config.intentSlugToOperations[widgetName].populateDataOperation;
    if (typeof this[operation] === "function") {
      this[operation](recastResponse);
    }
  }

  populateCreateRepoData(recastResponse) {
    const repoNameTextField = document.getElementById("repositoryName");
    if (repoNameTextField && recastResponse && recastResponse.entities["git-repository"] && recastResponse.entities["git-repository"].length > 0
      && recastResponse.entities["git-repository"]["0"].value) {
      const repoName = recastResponse.entities["git-repository"]["0"].value;
      (<HTMLInputElement>repoNameTextField).value = repoName;
    }
  }

  populateCreateIssueData(recastResponse) {
    const issueTitleTextField = document.getElementById("issueTitle");
    const issueRepositoryTextField = document.getElementById("issueRepository");
    if (issueTitleTextField && recastResponse && recastResponse.entities.issue_title && recastResponse.entities.issue_title.length > 0
      && recastResponse.entities.issue_title["0"].value) {
      const issueTitle = recastResponse.entities.issue_title["0"].value;
      (<HTMLInputElement>issueTitleTextField).value = issueTitle;
    }
    if (issueRepositoryTextField && recastResponse && recastResponse.entities["git-repository"] && recastResponse.entities["git-repository"].length > 0
      && recastResponse.entities["git-repository"]["0"].value) {
      const repoName = recastResponse.entities["git-repository"]["0"].value;
      (<HTMLInputElement>issueRepositoryTextField).value = repoName;
    }
  }

  populateCloseIssueData(recastResponse) {
    const issueNumberTextField = document.getElementById("issueNumerToClose");
    const issueRepositoryTextField = document.getElementById("repoForIssueClose");
    if (issueNumberTextField && recastResponse && recastResponse.entities.issue_id && recastResponse.entities.issue_id.length > 0
      && recastResponse.entities.issue_id["0"].value) {
      const issueNumber = recastResponse.entities.issue_id["0"].value;
      (<HTMLInputElement>issueNumberTextField).value = issueNumber;
    }
    if (issueRepositoryTextField && recastResponse && recastResponse.entities["git-repository"] && recastResponse.entities["git-repository"].length > 0
      && recastResponse.entities["git-repository"]["0"].value) {
      const repoName = recastResponse.entities["git-repository"]["0"].value;
      (<HTMLInputElement>issueRepositoryTextField).value = repoName;
    }
  }

  populateAddCollaboratorData(recastResponse) {
    const collaboratorNameTextField = document.getElementById("collaboratorName");
    const repoForCollabTextField = document.getElementById("repoForCollab");
    if (collaboratorNameTextField && recastResponse && recastResponse.entities.git_collaborator && recastResponse.entities.git_collaborator.length > 0
      && recastResponse.entities.git_collaborator["0"].value) {
      const collaboratorName = recastResponse.entities.git_collaborator["0"].value;
      (<HTMLInputElement>collaboratorNameTextField).value = collaboratorName;
    }
    if (repoForCollabTextField && recastResponse && recastResponse.entities["git-repository"] && recastResponse.entities["git-repository"].length > 0
      && recastResponse.entities["git-repository"]["0"].value) {
      const repoName = recastResponse.entities["git-repository"]["0"].value;
      (<HTMLInputElement>repoForCollabTextField).value = repoName;
    }
  }

  populateAddCommentData(recastResponse) {
    const repoForIssueCommentTextField = document.getElementById("repoForIssueComment");
    const issueNumberTextField = document.getElementById("issueNumber");
    const issueCommentTextArea = document.getElementById("issueComment");
    if (repoForIssueCommentTextField && recastResponse && recastResponse.entities["git-repository"] && recastResponse.entities["git-repository"].length > 0
      && recastResponse.entities["git-repository"]["0"].value) {
      const repoForIssueComment = recastResponse.entities["git-repository"]["0"].value;
      (<HTMLInputElement>repoForIssueCommentTextField).value = repoForIssueComment;
    }
    if (issueNumberTextField && recastResponse && recastResponse.entities.issue_id && recastResponse.entities.issue_id.length > 0
      && recastResponse.entities.issue_id["0"].value) {
      const issueNumber = recastResponse.entities.issue_id["0"].value;
      (<HTMLInputElement>issueNumberTextField).value = issueNumber;
    }
    if (issueCommentTextArea && recastResponse && recastResponse.entities.issue_comment && recastResponse.entities.issue_comment.length > 0
      && recastResponse.entities.issue_comment["0"].value) {
      const issueComment = recastResponse.entities.issue_comment["0"].value;
      (<HTMLInputElement>issueCommentTextArea).value = issueComment;
    }
  }

  populateDisplayCommentData(recastResponse) {
    const issueNumberTextField = document.getElementById("issueNumberForCommentView");
    const issueRepositoryTextField = document.getElementById("repoForCommentView");
    if (issueNumberTextField && recastResponse && recastResponse.entities.issue_id && recastResponse.entities.issue_id.length > 0
      && recastResponse.entities.issue_id["0"].value) {
      const issueNumber = recastResponse.entities.issue_id["0"].value;
      (<HTMLInputElement>issueNumberTextField).value = issueNumber;
    }
    if (issueRepositoryTextField && recastResponse && recastResponse.entities["git-repository"] && recastResponse.entities["git-repository"].length > 0
      && recastResponse.entities["git-repository"]["0"].value) {
      const repoName = recastResponse.entities["git-repository"]["0"].value;
      (<HTMLInputElement>issueRepositoryTextField).value = repoName;
    }
  }

  isVisible(element) {
    return element ? !element.classList.contains("hide") : false;
  }

  getDataFromFormAsJSON() {
    let data = {};
    // const intent = $(`#${$config.constants.hiddenIntentFieldId}`).val();
    const intent = window.localStorage.getItem($config.constants.hiddenIntentFieldId)
    const requestMethod = $config.intentSlugToOperations[intent].requestMethod;
    if (intent) {
      const operation = $config.intentSlugToOperations[intent].getDataOperation;
      if (typeof this[operation] === "function") {
        data = this[operation]();
      }
    }
    return data;
  }

  getCreateRepoJson() {
    const data: any = {};
    const request: any = {};
    if (this.isVisible(document.getElementById("createrepo"))) {
      request.name = (<HTMLInputElement>document.getElementById("repositoryName")).value;
      request.description = (<HTMLInputElement>document.getElementById("description")).value;
      request.homepage = (<HTMLInputElement>document.getElementById("homePageURL")).value;
      request.private = (<HTMLInputElement>document.getElementById("privateRepoChk")).checked;
      request.has_issues = (<HTMLInputElement>document.getElementById("issuesChk")).checked;
      request.has_wiki = (<HTMLInputElement>document.getElementById("wikiChk")).checked;
    }
    data.request = request;
    return data;
  }

  getCreateIssueJson() {
    const data: any = {};
    data.urlParams = {};
    const request: any = {};
    if (this.isVisible(document.getElementById("createissue"))) {
      request.title = (<HTMLInputElement>document.getElementById("issueTitle")).value;
      request.body = (<HTMLInputElement>document.getElementById("description")).value;
      request.assignees = (<HTMLInputElement>document.getElementById("assignees")).value ? (<HTMLInputElement>document.getElementById("assignees")).value.split(",") : [];
      request.labels = (<HTMLInputElement>document.getElementById("labels")).value ? (<HTMLInputElement>document.getElementById("labels")).value.split(",") : [];
      data.urlParams.repoName = (<HTMLInputElement>document.getElementById("issueRepository")).value;
    }
    data.request = request;
    return data;
  }

  getCloseIssueJson() {
    const data: any = {};
    data.urlParams = {};
    if (this.isVisible(document.getElementById("closeissue"))) {
      data.urlParams.issueId = (<HTMLInputElement>document.getElementById("issueNumerToClose")).value;
      data.urlParams.repoName = (<HTMLInputElement>document.getElementById("repoForIssueClose")).value;
    }
    return data;
  }

  getAddCollaboratorJson() {
    const data: any = {};
    data.urlParams = {};
    if (this.isVisible(document.getElementById("addcollab"))) {
      data.urlParams.collaborator = (<HTMLInputElement>document.getElementById("collaboratorName")).value;
      data.urlParams.repoName = (<HTMLInputElement>document.getElementById("repoForCollab")).value;
    }
    return data;
  }

  getAddCommentJson() {
    const data: any = {};
    data.urlParams = {};
    const request: any = {};
    if (this.isVisible(document.getElementById("addissuecomment"))) {
      request.body = (<HTMLInputElement>document.getElementById("issueComment")).value;
      data.urlParams.issueId = (<HTMLInputElement>document.getElementById("issueNumber")).value;
      data.urlParams.repoName = (<HTMLInputElement>document.getElementById("repoForIssueComment")).value;
    }
    data.request = request;
    return data;
  }

  getDisplayCommentJson() {
    const data: any = {};
    data.urlParams = {};
    if (this.isVisible(document.getElementById("displaylastcomment"))) {
      data.urlParams.issueId = (<HTMLInputElement>document.getElementById("issueNumberForCommentView")).value;
      data.urlParams.repoName = (<HTMLInputElement>document.getElementById("repoForCommentView")).value;
    }
    return data;
  }

  addGitOperationHistory(data) {
    const intent = data.intent;
    // const intent = "createrepo";
    let requestMethod = "";
    if (intent) {
      requestMethod = $config.intentSlugToOperations[intent].requestMethod;
    }
    const conversations = document.getElementById("conversations");
    let table;
    let comment;
    // Create Elements
    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const closeAnchor = document.createElement("a");
    const closeHeader = document.createElement("h6");
    const cardText = document.createElement("p");
    const cardFooter = document.createElement("div");
    const textMuted = document.createElement("small");
    const underCardLine = document.createElement("div");


    // Add Attributes
    card.classList.add("card");
    cardBody.classList.add("card-body");
    cardTitle.classList.add("card-title");
    closeAnchor.classList.add("close");
    // closeAnchor.setAttribute('href', '#');
    cardText.classList.add("card-text");
    cardFooter.classList.add("card-footer");
    textMuted.classList.add("text-muted");
    underCardLine.classList.add("line");

    // Add content
    closeHeader.innerHTML = "x";

    // const x = this.display_ct(0, textMuted);
    if (data.type === "command") {
      // Add content
      cardTitle.innerHTML = "You Said";
      cardText.innerHTML = data.command;
      card.classList.add("light-red");
      const repeat = document.createElement("a");
      repeat.classList.add("btn", "btn-info", "float-right");
      repeat.setAttribute("role", "button");
      repeat.setAttribute("href", "#");
      repeat.setAttribute("id", `btnRepeatCommand${data.insertionCounter}`);
      repeat.innerHTML = "Repeat";
      cardText.appendChild(repeat);
    } else if (data.type === "response") {
      // Add content
      cardTitle.innerHTML = "Server Responded As..";
      if (requestMethod == "post") {
        cardText.innerHTML = `${$config.intentSlugToOperations[intent].cardMsg}<a class='repoLink' href='${data[$config.intentSlugToOperations[intent].cardDataUrl]}'>${this.getVariable(data, $config.intentSlugToOperations[intent].cardDataName)}</a>`;
      } else if (requestMethod == "get") {
        cardText.innerHTML = $config.intentSlugToOperations[intent].cardMsg;
        if (data && data.length && data.length > 0) {
          if (intent === "viewrepos") {
            table = this.createRepoTable(data);
          } else if (intent === "displaylastcomment") {
            comment = this.createCommentBody(data);
          }
        }
      } else if (requestMethod == "purge") {
        cardTitle.innerHTML = "Operation Completed!";
        cardText.innerHTML = data.command;
      }
    } else if (data.type = 'widget') {
      cardTitle.innerHTML = "Operation recorded with below data, click submit to repeat.";
      cardText.innerHTML = $config.intentSlugToOperations[intent].cardMsg;
      if (data && data.length && data.length > 0) {
        if (intent === "viewrepos") {
          table = this.createRepoTable(data);
        } else if (intent === "displaylastcomment") {
          comment = this.createCommentBody(data);
        }
      }
    } else {
      cardTitle.innerHTML = "Server Responded As..";
      cardText.innerHTML = `Operation failed with status: ${data.status}`;
    }

    // Associations
    closeAnchor.appendChild(closeHeader);
    cardTitle.appendChild(closeAnchor);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    if (comment) { cardBody.appendChild(comment); }
    cardFooter.appendChild(textMuted);
    card.appendChild(cardBody);
    if (table) { card.appendChild(table); }
    card.appendChild(cardFooter);

    conversations.insertBefore(underCardLine, conversations.firstChild);
    conversations.insertBefore(card, conversations.firstChild);
  }

  getVariable(data, commaSeparatedValue) {
    const arr = commaSeparatedValue.split(",");
    for (let i = 0; i < arr.length; i++) {
      data = data[arr[i]];
    }
    return data;
  }

  // Create table of repositories ==================================================================================================
  createRepoTable(data) {
    // Create Elements
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr_head = document.createElement("tr");
    const th_1 = document.createElement("th");
    const th_2 = document.createElement("th");
    const th_3 = document.createElement("th");
    const th_4 = document.createElement("th");
    const th_5 = document.createElement("th");
    const th_6 = document.createElement("th");
    const th_7 = document.createElement("th");

    // Add Attributes
    table.classList.add("table", "tabled-bordered", "table-striped", "table-hover");
    thead.classList.add("thead-dark");
    th_1.setAttribute("scope", "col");
    th_2.setAttribute("scope", "col");
    th_3.setAttribute("scope", "col");
    th_4.setAttribute("scope", "col");
    th_5.setAttribute("scope", "col");
    th_6.setAttribute("scope", "col");
    th_7.setAttribute("scope", "col");

    // Add Inner HTML
    th_1.innerHTML = "#";
    th_2.innerHTML = "Repository Name";
    th_3.innerHTML = "Repository ID";
    th_4.innerHTML = "Created On";
    th_5.innerHTML = "Created By";
    th_6.innerHTML = "View Raw";
    th_7.innerHTML = "Delete Repository";

    // Associations
    tr_head.appendChild(th_1);
    tr_head.appendChild(th_2);
    tr_head.appendChild(th_3);
    tr_head.appendChild(th_4);
    tr_head.appendChild(th_5);
    tr_head.appendChild(th_6);
    tr_head.appendChild(th_7);
    thead.appendChild(tr_head);
    table.appendChild(thead);


    for (let i = 0; i < data.length; i++) {
      const currentRepo = data[i];
      // Create Elements
      const tbody = document.createElement("tbody");
      const tr_body = document.createElement("tr");
      const th_vertical = document.createElement("th");
      const td_1 = document.createElement("td");
      const td_2 = document.createElement("td");
      const td_3 = document.createElement("td");
      const td_4 = document.createElement("td");
      const td_5 = document.createElement("td");
      const td_6 = document.createElement("td");

      // Add Attributes
      th_vertical.setAttribute("scope", "row");
      tr_body.setAttribute("id", `repoRow${i}`);

      // Add Inner HTML
      th_vertical.innerHTML = i + 1 + "";
      td_1.innerHTML = currentRepo.name;
      td_2.innerHTML = `<a href='${currentRepo.html_url}' class='repoLink'>${currentRepo.id}</a>`;
      td_3.innerHTML = currentRepo.created_at;
      td_4.innerHTML = `<a href='${currentRepo.owner.html_url}' class='btn btn-info'>${currentRepo.owner.login}</a>`;
      td_5.innerHTML = `<a href='${currentRepo.url}' class='btn btn-info'>View</a>`;
      td_6.innerHTML = `<a href='${currentRepo.owner.html_url}' class='btn btn-danger'>Delete</a>`;

      // Associations
      tr_body.appendChild(th_vertical);
      tr_body.appendChild(td_1);
      tr_body.appendChild(td_2);
      tr_body.appendChild(td_3);
      tr_body.appendChild(td_4);
      tr_body.appendChild(td_5);
      tr_body.appendChild(td_6);
      tbody.appendChild(tr_body);
      table.appendChild(tbody);
    }

    return table;
  }

  loadConversations(historyAll) {
    if (historyAll) {
      historyAll.forEach((element) => {
        this.addGitOperationHistory(element);
      });
    }
  }

  createCommentBody(data) {
    const commentPara = document.createElement("p");
    const lastComment = this.helper.getLatestComment(data);
    commentPara.classList.add("card-text");
    commentPara.innerHTML = `<strong style='color:black'>COMMENT:</strong> <i>${lastComment}</i>`;
    return commentPara;
  }

  concealCodeInUrl() {
    let location = new Location();
    location.href = "http://localhost:8080";
    window.location = location;
  }

  toggleModals(response) {
    const self = this;
    const promise = response.json();
    const intent = $(`#${$config.constants.hiddenIntentFieldId}`).val();
    $("#submitConfirm").addClass("hide");
    $("#btnCancelConfirm").click();
    $(".modal-backdrop").removeClass("modal-backdrop");
    $("#underWidgetLine").addClass("hide");
    $("#intentBox").addClass("hide");
    $("#widgets").children().addClass("hide");
    if (response && response.status && (response.status === 201 || response.status === 200 || response.status === 204)) {
      $("#successAlert").removeClass("hide");
      promise.then((body) => {
        $("#op-msg").text($config.intentSlugToOperations[intent].successMessage);
        $("#successAlert").removeClass("hide");
        const action = $config.intentSlugToOperations[intent].response_action;
        body.intent = intent;
        action.payload = body;
        // this.store.dispatch(action);
        // self.addGitOperationHistory(body, 'response');
      });
    } else {
      $("#dangerAlert").removeClass("hide");
      // self.addGitOperationHistory(response.status);
    }
    // clear intent
    // $(`#${$config.constants.hiddenIntentFieldId}`).val("");
    window.localStorage.setItem($config.constants.hiddenIntentFieldId, "");
  }

  // V2
  repeatCommand(card: Card) {
    const command = card.cardContent;
    this.repeatRequested.emit(command);
  }

  // Angular Specific code here
  hideNonCards() {
    this.commandPromptEnteredWithValue.emit();
  }
}
``