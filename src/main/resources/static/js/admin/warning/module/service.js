const warningService = (() => {
    const warningList = async (feature = [] = "") => {

        const response = await fetch("https://suspected-already-stocks-missed.trycloudflare.com/api/slang-check", {
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

    return {warningList:warningList, allPosts: allPosts}
})();