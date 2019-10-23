import AxiosWrapper from '../../../common/AxiosWrapper';
export const fetchAuditLogData = async () => {
  try {
    const response = await AxiosWrapper.get('/auditLog');
    return response;
  } catch (e) {
    throw e;
  }
};
