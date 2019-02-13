import * as CardActions from './cards.actions';
import * as $config from '../configuration/config';
import { HelperServiceService }  from '../services/helpers/helper-service.service';
import { Card } from '../components/l2/content/primary-container/cards/card/card.model';

const helper = new HelperServiceService();

export const initialState = {
    responses: [],
    // createrepo: [],
    // createissue: [],
    // closeissue: [],
    // addissuecomment: [],
    // displaylastcomment: [],
    // addcollab: [],
    // viewrepos: [],
    queries: [],
    messages: [],
    insertionCounter: 0,
};

export function  updateHistoryReducer(currentState = initialState, action: CardActions.CardActions) {
    let nextState: {insertionCounter: number, responses: Card[], messages: Card[], queries: Card[]} = getCardsFromState(currentState)
    let card: Card;
    let response: any = {};
    switch (action.type) {
        case CardActions.ADD_REPO_RESPONSE:
        case CardActions.ADD_ISSUE_RESPONSE:
        case CardActions.ADD_COLLAB_RESPONSE:
        case CardActions.ADD_COMMENT_RESPONSE:
        case CardActions.CLOSE_ISSUE_RESPONSE:
        case CardActions.SHOW_LAST_COMMENT_RESPONSE:
        case CardActions.VIEW_REPO_RESPONSE:
            response = action.payload;
            nextState = getCardsFromState(currentState);
            card = response;
            card.type = "response";
            // card.action = action.type;
            card.insertionCounter = ++nextState.insertionCounter;
            if (nextState.messages) {
                nextState.messages = [...nextState.messages, card];
            } else {
                nextState.messages = [card];
            }
            window.localStorage.setItem("currentState", JSON.stringify(nextState));
            return nextState;
        // case "ADD_REPO":
        // case "ADD_COLLAB":
        // case "ADD_ISSUE":
        // case "ADD_COMMENT":
        // case "CLOSE_ISSUE":
        // case "SHOW_LAST_COMMENT":
        // case "VIEW_REPO":
        //     response = action.payload;
        //     nextState = window.localStorage.getItem('currentState') ? JSON.parse(window.localStorage.getItem('currentState')) : currentState;
        //     card = response;
        //     card.type = 'widget';
        //     card.insertionCounter = ++nextState.insertionCounter;
        //     if (response.intent) {
        //         let intent = response.intent;
        //         if (nextState[intent]) {
        //             nextState[intent] = [...nextState[intent], card];
        //         } else {
        //             nextState[intent] = [card];
        //         }
        //     }
        //     window.localStorage.setItem('currentState', JSON.stringify(nextState));
        //     return nextState;
        case CardActions.COMMAND:
            nextState = getCardsFromState(currentState);
            card = action.payload;
            card.insertionCounter = ++nextState.insertionCounter;
            if (nextState.queries) {
                nextState.queries = [...nextState.queries, card];
            } else {
                nextState.queries = [card];
            }
            window.localStorage.setItem("currentState", JSON.stringify(nextState));
            return nextState;
        case CardActions.CLEAR_HISTORY:
            nextState = helper.clone(initialState);
            // card.command = $config.intentSlugToOperations.resethistory.cardMsg;
            card = action.payload;
            // card.message = $config.intentSlugToOperations.resethistory.cardMsg;
            // card.type = "response";
            // card.insertionCounter = 0;
            // card.intent = $(`#${$config.constants.hiddenIntentFieldId}`).val();
            // card.intent = window.localStorage.getItem('intent');
            nextState.messages = [card];
            window.localStorage.setItem("currentState", JSON.stringify(nextState));
            return nextState;
        default:
            return nextState;
    }
}

function getCardsFromState(currentState) {
    let cards = window.localStorage.getItem("currentState") ? JSON.parse(window.localStorage.getItem("currentState")) : currentState;
    if(cards && !cards.hasOwnProperty('insertionCounter')) {
        cards = initialState;
    }
    // console.log("Cards from reducer function : " + JSON.stringify(cards));
    return cards;
}