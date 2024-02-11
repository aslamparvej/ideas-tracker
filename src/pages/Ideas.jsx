import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

import { useIdeas } from "../lib/context/ideas";
import { useUser } from "../lib/context/user";

const Ideas = () => {
  const ideas = useIdeas();
  const user = useUser();
  return (
    <div className="ideas-container">
      {  ideas.current.length <= 0 ? 
      (<div><p>There is no ideas</p></div>) : 
      ideas.current.map((idea) => (
        <div className="idea-card" key={idea.$id}>
          <div className="idea-card-header">
            <h2>{idea.title}</h2>
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
                  <GitHubIcon /> Github
                </a>
              </p>
              <p>
                <a
                  href={idea.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LanguageIcon /> Website
                </a>
              </p>
            </div>
            {user.current && user.current.$id === idea.userId && (
              <button
                type="button"
                className="custom-btn custom-btn-primary"
                onClick={() => ideas.remove(idea.$id)}
              >
                Remove
              </button>
            )}
          </div>
          <div className="idea-card-footer">
            <p>{new Date(idea.$createdAt).toDateString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ideas;
