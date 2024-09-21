// context/GitHubContext.js
import React, { createContext, useState, useEffect } from 'react';


const GITHUB_API_URL = "https://api.github.com/users/Yug3ne/repos";
 const fetchRepos = async () => {
    try {
        const response = await fetch(GITHUB_API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();

        // Filter repositories that have stars (stargazers_count > 0)
        const starredRepos = data.filter(repo => repo.stargazers_count > 0);
        return starredRepos
        
    } catch (error) {
        console.error(error);
        return [];
    }
};

const USER_URL = "https://api.github.com/users/Yug3ne"
const fetchProfile = async () => {
  try{
    const response = await fetch(USER_URL)
    if(!response.ok){
      throw new Error("Failed to fetch profile");    
    }
    const data = await response.json()
    return data
  }catch (error){
    console.error(error)
    return null
  }
}


export const GitHubContext = createContext();

export const GitHubProvider = ({ children }) => {
  const [repos, setRepos] = useState([]);
  const [profile, setProfile] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRepositories = async () => {
      setLoading(true);
      const data = await fetchRepos();
      setRepos(data);
      setLoading(false);
    };

    const loadProfile = async () => {
      setLoading(true)
      const data = await fetchProfile()
      setProfile(data)
      setLoading(false)
    }

    loadRepositories();
    loadProfile
  }, []);

  return (
    <GitHubContext.Provider value={{ repos, loading, profile }}>
      {children}
    </GitHubContext.Provider>
  );
};
