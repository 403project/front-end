import React from 'react'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

const useGetPolls = (options?: Omit<UseQueryOptions<AxiosResponse<{polls: []}>, AxiosError, null>, 'queryFn'>) => {
    return useQuery({queryKey: ["get/polls"], queryFn: () => axios.get('https://api.byulbyul.store/polls'), ...options})
}

export default useGetPolls