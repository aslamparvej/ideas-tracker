import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useIdeas } from "../lib/context/ideas";
import { useUser } from "../lib/context/user";

const Ideas = () => {
  const ideas = useIdeas();
  const user = useUser();

  return (
    <div className="ideas-container">
      {ideas.current.length <= 0 ? (
        <div>
          <p>There is no ideas</p>
        </div>
      ) : (
        ideas.current.map(
          (idea) =>
            user.current.$id === idea.userId && (
              <div className="idea-card" key={idea.$id}>
                <div className="idea-card-header">
                  <h2 title={`${idea.title}`}>{idea.title}</h2>
                  <div className="idea-action-btn-container">
                    <span
                      className="idea-action-btn remove-idea-btn"
                      onClick={() => ideas.remove(idea.$id)}
                    >
                      <DeleteIcon />{" "}
                    </span>
                    <span
                      className="idea-action-btn update-idea-btn"
                      onClick={() => ideas.update(idea.$id, idea)}
                    >
                      <EditIcon />
                    </span>
                  </div>
                </div>
                <div className="idea-card-body">
                  <p>{idea.description}</p>
                  <div className="idea-link-container">
                    <p>
                      <a
                        href={idea.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHubIcon />
                      </a>
                    </p>
                    <p>
                      <a
                        href={idea.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LanguageIcon />
                      </a>
                    </p>
                  </div>
                </div>
                <div className="idea-card-footer">
                  <p>{new Date(idea.$createdAt).toDateString()}</p>
                  <p className={`idea-status idea-status-${idea.status}`}>{idea.status}</p>
                </div>
              </div>
            )
        )
      )}
    </div>
  );
};

export default Ideas;
