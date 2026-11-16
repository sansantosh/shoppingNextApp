export default async function Page() {
    const data = await new Promise((resolve) => setTimeout(resolve, 2000));
    return <p> Invoice page</p>
}