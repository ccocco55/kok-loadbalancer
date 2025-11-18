const warningService = (() => {
    const warningList = async (feature = [] = "") => {

        const response = await fetch("https://notebook-affairs-required-working.trycloudflare.com/api/slang-check", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ feature: feature })
        });

        const data = await response.json();
        console.log(data.isSlang);

        return data.isSlang;
    }

    const allPosts = async () => {
        const response = await fetch("/api/member/all-posts", {
            method:'GET'
        })

        const result = await response.json();


        return result;
    }

    const checkAllPosts = async () => {
        const posts = await allPosts();

        const featureList = posts.map(post => ({
            id: post.id,
            content: post.post_content
        }));

        const slangIds = await warningList(featureList);

        return slangIds;
    };

    return {warningList:warningList, allPosts: allPosts, checkAllPosts:checkAllPosts}
})();