import staffApi from "./staffApi";
import {IOneStaffResponse, IStaffResponse} from "./staff.type";

export const homeEndpoints = staffApi.injectEndpoints({
  endpoints: (builder) => ({
    getStaff: builder.query<IStaffResponse[],string>({
      query: () => ({
        url: `profile/workers`,
        method:"GET"
      }),
      providesTags: ["staff"],
    }),
    getOneStaff: builder.query<IOneStaffResponse, number>({
      query: (id:number) => ({
        url: `profile/workers/${id}`,
        method:"GET"
      }),
      providesTags: ["staff"],
    })
  }),
});

export const { useGetStaffQuery, useGetOneStaffQuery } = homeEndpoints;
