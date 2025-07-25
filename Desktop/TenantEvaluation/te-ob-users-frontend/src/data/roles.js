export const roles = {
  ADMIN: 'ROLE_OB_TE_ADMIN',
  SALES_REP: 'ROLE_SALES_REP',
  ORGANIZATION_ADMIN: 'ROLE_OB_MGT_ADMIN',
  SUBSCRIBER_ADMIN: 'ROLE_OB_SUBS_ADMIN',
  PROPERTY_ADMIN: 'ROLE_OB_PROPERTY_ADMIN',
};

export const rolesLabel = {
  [roles.ADMIN]: 'TE Admin',
  [roles.SALES_REP]: 'Sales Rep',
  [roles.ORGANIZATION_ADMIN]: 'Admin',
  [roles.SUBSCRIBER_ADMIN]: 'Regional Admin',
  [roles.PROPERTY_ADMIN]: 'Property Admin',
};

const rolesWeight = {
  [roles.ADMIN]: 5,
  [roles.SALES_REP]: 4,
  [roles.ORGANIZATION_ADMIN]: 3,
  [roles.SUBSCRIBER_ADMIN]: 2,
  [roles.PROPERTY_ADMIN]: 1,
};

const rolDefaultRoute = {
  [roles.SALES_REP]: 'Properties',
  [roles.PROPERTY_ADMIN]: 'Properties',
};

export const getRolDefaultRoute = (ROL) => {
  if (!ROL) return null;
  if (rolDefaultRoute[ROL]) return rolDefaultRoute[ROL];
  return null;
};

export const setRol = (rol) => {
  let ROLES = rol;
  if (typeof rol === 'string') ROLES = rol.split(',');

  let resRol = null;
  Object.values(roles).forEach((role) => {
    if (ROLES.includes(role) && !resRol) resRol = role;
  });

  return resRol;
};

export const getRolLabel = (ROLES) => {
  if (rolesLabel[setRol(ROLES)]) return rolesLabel[setRol(ROLES)];
  if (rolesLabel[ROLES]) return rolesLabel[ROLES];
  return 'Unknown';
};

export const getRolWeight = (ROL) => {
  if (rolesWeight[ROL]) return rolesWeight[ROL];
  return -1;
};

export const getRol = (ROLES) => setRol(ROLES);

export default {
  roles,
  getRol,
  setRol,
  getRolLabel,
};
