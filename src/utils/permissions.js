export const canCreateProject = (role) => {
  return role === "admin" || role === "manager";
};

export const canEditProject = (role) => {
  return role === "admin" || role === "manager";
};

export const canDeleteProject = (role) => {
  return role === "admin";
};
