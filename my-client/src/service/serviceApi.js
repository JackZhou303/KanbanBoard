export default class ServiceApi {
    
    static async get_all_data(){
        try {
            const response= await fetch("http://localhost:4000/api/all_cards")
            const responseJson= response.json();
            console.log(responseJson)
            return responseJson;
        } catch (error) {
            console.log(error)
        }
    }

    static async insert_single_data(data){
        try {
            const response= await fetch("http://localhost:4000/api/card", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify ({
                    category: data.category,
                    content: data.content,
                    type : data.type
                })
            })
            const responseJson= response.json();
            console.log(responseJson)
            return responseJson;
        } catch (error) {
            console.log(error)
        }
    }

    static async update_category(data){
        console.log(data._id);
        try {
            const response= await fetch("http://localhost:4000/api/update/"+ String(data._id), {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify ({
                    category: data.category
                })
            })
            const responseJson= response.json();
            console.log(responseJson)
            return responseJson;
        } catch (error) {
            console.log(error)
        }
    }

    static async delete_entry(data){
        console.log(data._id);
        try {
            const response= await fetch("http://localhost:4000/api/remove/"+ String(data._id), {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }})
            const responseJson= response.json();
            console.log(responseJson)
            return responseJson;
        } catch (error) {
            console.log(error)
        }
    }


}