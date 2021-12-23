/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
    const { id } = params

    return {
        body: {
            id: id,
            name: "cool",
            description: "whatever",
            attributes: {
                speed: 5,
            }
        }
    }
}
