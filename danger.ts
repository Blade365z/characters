import { danger, fail } from "danger";

const ensurePRHasAssignee = () => {
  // Always ensure we assign someone, so that our Slackbot can do its work correctly
  if (danger.github.pr.assignee === null) {
    fail(
      "Please assign someone to merge this PR, and optionally include people who should review."
    );
  }
};

ensurePRHasAssignee();
