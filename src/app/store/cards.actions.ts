import { Action } from "@ngrx/store";
import { Card } from "../components/l2/content/primary-container/cards/card/card.model";

export const ADD_REPO_RESPONSE = "ADD_REPO_RESPONSE";
export const ADD_ISSUE_RESPONSE = "ADD_ISSUE_RESPONSE";
export const ADD_COLLAB_RESPONSE = "ADD_COLLAB_RESPONSE";
export const ADD_COMMENT_RESPONSE = "CLOSE_ISSUE_RESPONSE";
export const CLOSE_ISSUE_RESPONSE = "CLOSE_ISSUE_RESPONSE";
export const SHOW_LAST_COMMENT_RESPONSE = "SHOW_LAST_COMMENT_RESPONSE";
export const VIEW_REPO_RESPONSE = "VIEW_REPO_RESPONSE";
export const COMMAND = "COMMAND";
export const CLEAR_HISTORY = "CLEAR_HISTORY";


export class AddRepoResponse implements Action {
    readonly type = ADD_REPO_RESPONSE;
    payload: Card;
}

export class AddIssueResponse implements Action {
    readonly type = ADD_ISSUE_RESPONSE;
    constructor(public payload: Card){}
}

export class AddCollabResponse implements Action {
    readonly type = ADD_COLLAB_RESPONSE;
    constructor(public payload: Card){}
}

export class AddCommentResponse implements Action {
    readonly type = ADD_COMMENT_RESPONSE;
    constructor(public payload: Card){}
}

export class CloseIssueResponse implements Action {
    readonly type = CLOSE_ISSUE_RESPONSE;
    constructor(public payload: Card){}
}

export class ShowLastCommentResponse implements Action {
    readonly type = SHOW_LAST_COMMENT_RESPONSE;
    constructor(public payload: Card){}
}

export class ViewRepoResponse implements Action {
    readonly type = VIEW_REPO_RESPONSE;
    constructor(public payload: Card){}
}

export class Command implements Action {
    readonly type = COMMAND;
    constructor(public payload: Card){}
}

export class ClearHistory implements Action {
    readonly type = CLEAR_HISTORY;
    constructor(public payload: Card){}
}

export type CardActions = AddRepoResponse | AddCollabResponse | AddCommentResponse | AddIssueResponse | CloseIssueResponse | ShowLastCommentResponse | ViewRepoResponse | Command | ClearHistory;