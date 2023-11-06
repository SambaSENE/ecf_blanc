class FetchDb
{
    static async fetchFile(_file){
        let response = await fetch(_file);
        let json = await response.json();
        return json;
    }
}
export { FetchDb }