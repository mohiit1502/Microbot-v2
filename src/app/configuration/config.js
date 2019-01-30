module.exports = {
  gitToken: '96ead73c54cbbf023a73ee57af145b205d460851',
  recasttoken: '26021d055040a9d9f1ad48476efab4a0',
  intentSlugToOperations: {
    createrepo: {
      requestMethod: 'post',
      intentMessage: 'Create a Repository in Github',
      getDataOperation: 'getCreateRepoJson',
      githubOperation: 'createRepository',
      showWidgetOperation: 'showCreateRepoWidget',
      populateDataOperation: 'populateCreateRepoData',
      successMessage: 'Repository Added!',
      cardMsg: 'Requested Repository has been added and is available at ',
      cardDataUrl: 'html_url',
      cardDataName: 'name',
      action: { type: 'ADD_REPO' },
      response_action: { type: 'ADD_REPO_RESPONSE' },
    },
    createissue: {
      requestMethod: 'post',
      intentMessage: 'Raise an issue in Github',
      getDataOperation: 'getCreateIssueJson',
      githubOperation: 'createIssue',
      showWidgetOperation: 'showCreateIssueWidget',
      populateDataOperation: 'populateCreateIssueData',
      successMessage: 'Issue Created!',
      cardMsg: 'Issue Created as requested, issue details available at ',
      cardDataUrl: 'html_url',
      cardDataName: 'title',
      action: { type: 'ADD_ISSUE' },
      response_action: { type: 'ADD_ISSUE_RESPONSE' },
    },
    closeissue: {
      requestMethod: 'post',
      intentMessage: 'Close an issue in Github',
      getDataOperation: 'getCloseIssueJson',
      githubOperation: 'closeIssue',
      showWidgetOperation: 'showCloseIssueWidget',
      populateDataOperation: 'populateCloseIssueData',
      successMessage: 'Issue Closed!',
      cardMsg: 'Issue Closed as requested, closed issue available at: ',
      cardDataUrl: 'html_url',
      cardDataName: 'title',
      action: { type: 'CLOSE_ISSUE' },
      response_action: { type: 'CLOSE_ISSUE_RESPONSE' },
    },
    addissuecomment: {
      requestMethod: 'post',
      intentMessage: 'Add a comment on an issue in Github',
      getDataOperation: 'getAddCommentJson',
      githubOperation: 'addIssueComment',
      showWidgetOperation: 'showAddCommentWidget',
      populateDataOperation: 'populateAddCommentData',
      successMessage: 'Comment Added!',
      cardMsg: 'Comment Added as Requested, view here: ',
      cardDataUrl: 'html_url',
      cardDataName: 'title',
      action: { type: 'ADD_COMMENT' },
      response_action: { type: 'ADD_ISSUE_COMMENT_RESPONSE' },
    },
    displaylastcomment: {
      requestMethod: 'get',
      intentMessage: 'Display last comment of an issue in Github',
      getDataOperation: 'getDisplayCommentJson',
      githubOperation: 'displayLastComment',
      showWidgetOperation: 'showDisplayCommentWidget',
      populateDataOperation: 'populateDisplayCommentData',
      successMessage: 'Comment Retrieved!',
      cardMsg: 'Please find requested comment below: ',
      cardDataUrl: 'html_url',
      cardDataName: 'title',
      action: { type: 'SHOW_LAST_COMMENT' },
      response_action: { type: 'SHOW_LAST_COMMENT_RESPONSE' },
    },
    addcollab: {
      requestMethod: 'post',
      intentMessage: 'Add a collaborator',
      getDataOperation: 'getAddCollaboratorJson',
      githubOperation: 'addCollaborator',
      showWidgetOperation: 'showAddCollaboratorWidget',
      populateDataOperation: 'populateAddCollaboratorData',
      successMessage: 'Collaborator Added!',
      cardMsg: 'Collaborator added, details available at ',
      cardDataUrl: 'html_url',
      cardDataName: 'invitee,login',
      action: { type: 'ADD_COLLAB' },
      response_action: { type: 'ADD_COLLAB_RESPONSE' },
    },
    viewrepos: {
      requestMethod: 'get',
      intentMessage: 'View Repositories for current user',
      getDataOperation: 'getViewRepositoryJson',
      githubOperation: 'viewRepositories',
      showWidgetOperation: 'showViewRepoWidget',
      populateDataOperation: 'populateViewRepoData',
      successMessage: 'Showing repositories',
      cardMsg: 'Repository Details available below: ',
      cardDataUrl: 'html_url',
      cardDataName: 'invitee,login',
      action: { type: 'VIEW_REPO' },
      response_action: { type: 'VIEW_REPO_RESPONSE' },
    },
    resethistory: {
      requestMethod: 'purge',
      intentMessage: 'Clear all Operations History',
      successMessage: 'Purged!',
      cardMsg: 'Purged history of all Operations and Commands!',
      action: { type: 'CLEAR_HISTORY' },
      response_action: { type: 'CLEAR_HISTORY_RESPONSE' },
    },
    addquery: {
      action: { type: 'ADD_QUERY' },
    },
  },
  constants: {
    hiddenIntentFieldId: 'intentHidden',
  },
};
