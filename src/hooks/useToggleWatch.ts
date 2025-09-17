import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Movie } from '@/types/movie'

// Simulated API call
const toggleWatchAPI = async (movieId: number): Promise<number> => {
  return new Promise(
    (resolve) => setTimeout(() => resolve(movieId), 500) // simulate server delay
  )
}

export const useToggleWatch = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: toggleWatchAPI,
    onMutate: async (movieId: number) => {
      // cancel ongoing queries
      await queryClient.cancelQueries({ queryKey: ['movies', 'popular'] })

      // snapshot previous state
      const previousMovies = queryClient.getQueryData<Movie[]>([
        'movies',
        'popular',
      ])

      // optimistic update
      if (previousMovies) {
        queryClient.setQueryData<Movie[]>(
          ['movies', 'popular'],
          previousMovies.map((m) =>
            m.id === movieId ? { ...m, watched: !m.watched } : m
          )
        )
      }

      return { previousMovies }
    },
    onError: (_err, _movieId, context) => {
      // rollback if error
      if (context?.previousMovies) {
        queryClient.setQueryData(['movies', 'popular'], context.previousMovies)
      }
    },
    // onSettled: () => {
    //   // refetch to sync with server
    //   queryClient.invalidateQueries({ queryKey: ['movies', 'popular'] })
    // },
  })
}
