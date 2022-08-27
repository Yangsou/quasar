import { contentfulAPI } from 'src/shared/contentful'
import { useGlobalStore } from 'src/stores/global-store';
import { computed, readonly, ref } from 'vue';

export const usePost = () => {
  const globalStore = useGlobalStore();
  const getPostAssetLocalById = (id: string) => globalStore.imageCaches[id];
  const getAssetById = async (id: string) => {
    if (!id) {
      return Promise.resolve(null)
    }
    const result = await contentfulAPI.getAssetById(id);
    globalStore.imageCaches[id] = result.fields.file.url;
  }
  const useGetAssetById = (id: string, refresh = false) => {
    const fetching = ref(false);
    const refetch = () => {
      fetching.value = true;
      if (!globalStore.imageCaches[id]) {
        return getAssetById(id).catch((err) => console.error(err))
          .finally(() => fetching.value = false)
      }
    }
    if (refresh) {
      refetch();
    }
    const data = computed(() => globalStore.imageCaches[id]);
    return {
      data,
      fetching: readonly(fetching),
      refetch
    }
  }

  return {
    getAssetById,
    useGetAssetById,
    getPostAssetLocalById
  }
}
