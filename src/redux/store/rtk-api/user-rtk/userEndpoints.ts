import { IGetOneProfile, IGetProfiles } from "./user.type";
import userApi from "./userApi";

export const userEndpoints = userApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfiles: builder.query<IGetProfiles, object>({
      query: (filters) => ({
        url: `/profile/list`,
        params: {
          ...filters,
        },
      }),
      providesTags: ["user"],
    }),
    getOneProfile: builder.query<IGetOneProfile, object>({
      query: (id) => ({
        url: `/profile/user/${id}`,
        params: {
          // id,
        },
      }),
      providesTags: ["user"],
    }),
  }),
});

export const { useGetProfilesQuery } = userEndpoints;
