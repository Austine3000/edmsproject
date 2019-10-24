import AxiosWrapper from '../../../common/AxiosWrapper';

export interface ISearch {
  department: String;
  user: String;
  status: String;
}

export const fetchAuditLogData = async () => {
  try {
    const response = await AxiosWrapper.get('/auditLog');
    return response;
  } catch (e) {
    throw e;
  }
};

export const fetchAuditSearchData = async (data: ISearch) => {
  try {
    const response = await AxiosWrapper.get(
      `/auditLog?user.department=${data.department}&user.name=${data.user}&status=${data.status}`
    );
    return response;
  } catch (e) {
    throw e;
  }
};
