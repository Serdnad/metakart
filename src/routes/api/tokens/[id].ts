/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
    const { id } = params

    return {
        body: {
            id: id,
            name: "MetaKart Token",
            description: "This a MetaKart token!\n\nSpecific tokens will be revealed shortly!",
            image: "https://www.themetakart.com/nft1.jpg",
            attributes: {
                speed: 5,
            }
        }
    }
}
