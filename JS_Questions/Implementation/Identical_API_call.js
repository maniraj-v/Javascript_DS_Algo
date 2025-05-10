/*

BFE Dev : https://bigfrontend.dev/problem/merge-identical-API-calls

Suppose we have a utility function getAPI() which fetches data.

const getAPI = (path, config) => { ... }
const list1 = await getAPI('/list', { keyword: 'bfe'})
const list2 = await getAPI('/list', { keyword: 'dev'})
It works great. Util the UI become so complicated that same API might be called for multiple time within a relatively short period of time.

You want to avoid the unnecessary API calls, based on following assumption:

GET API call response hardly changes within 1000ms.

So identical GET API calls should return the same response within 1000ms. By identical, it means path and config are deeply equal.

You create createGetAPIWithMerging(getAPI), which works like following.

const getAPIWithMerging = createGetAPIWithMerging(getAPI)
getAPIWithMerging('/list', { keyword: 'bfe'}).then(...)  
// 1st call,  this will call getAPI
getAPIWithMerging('/list', { keyword: 'bfe'}).then(...) 
// 2nd call is identical to 1st call, 
// so getAPI is not called, 
// it resolves when 1st call resolves
getAPIWithMerging('/list', { keyword: 'dev'}).then(...)
// 3rd call is not identical, so getAPI is called
// after 1000ms
getAPIWithMerging('/list', {keyword: 'bfe'}).then(...)
// 4th call is identical to 1st call, 
// but since after 1000ms, getAPI is called.
Attention for memory leak!
Your cache system should not bloat. For this problem, you should have 5 cache entries at maximum, which means:

getAPIWithMerging('/list1', { keyword: 'bfe'}).then(...) 
// 1st call, call callAPI(), add a cache entry
getAPIWithMerging('/list2', { keyword: 'bfe'}).then(...) 
// 2nd call, call callAPI(), add a cache entry
getAPIWithMerging('/list3', { keyword: 'bfe'}).then(...) 
// 3rd call, call callAPI(), add a cache entry
getAPIWithMerging('/list4', { keyword: 'bfe'}).then(...) 
// 4th call, call callAPI(), add a cache entry
getAPIWithMerging('/list5', { keyword: 'bfe'}).then(...) 
// 5th call, call callAPI(), add a cache entry
getAPIWithMerging('/list6', { keyword: 'bfe'}).then(...) 
// 6th call, call callAPI(), add a cache entry
// cache of 1st call is removed
getAPIWithMerging('/list1', { keyword: 'bfe'}).then(...) 
// identical with 1st call, but cache of 1st call is removed
// new cache of entry is added
clear()
For test purpose, please provide a clear method to clear all cache.

getAPIWithMerging.clearCache()
*/


function createGetAPIWithMerging(getAPI) {
  const cache = new Map();

  return async function (path, config) {
    const key = JSON.stringify({ path, config });
    if (cache.has(key)) {
      console.log("from cache", path, config);
      return cache.get(key);
    }
    // Check cache overflow
    if (cache.size >= 5) {
      const firstCacheItem = cache.entries().next().value;
      cache.delete(firstCacheItem.key);
    }
    const promise = getAPI(path, config);
    cache.set(key, promise);
    return promise;
  };
}

const getAPI = async (path, config) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ text: "success", path, config });
    }, 2000);
  });
};

const getAPIWithMerging = createGetAPIWithMerging(getAPI);

getAPIWithMerging("/path1", { name: "mani" }).then((resp) => {
  console.log({ resp });
});

getAPIWithMerging("/path2", { name: "mani" }).then((resp) => {
  console.log({ resp });
});

getAPIWithMerging("/path1", { name: "mani" }).then((resp) => {
  console.log({ resp });
});



// Note : important handling of static method clearCache
// Name return function and then add clearCache function to it

  async function merging(path, config){
    ...
    return promise
  }
  merging.clearCache = function(){
    this.cache.clear()
  }


