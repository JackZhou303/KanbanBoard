export default class ServiceApi {
    
    static async get_all_data(){
        try {
            const response= await fetch("https://sage-dragon-278619.uc.r.appspot.com/api/all_cards")
            const responseJson= response.json();
            return responseJson;
        } catch (error) {
            console.log(error)
        }
    }

    static async insert_single_data(data){
        try {
            const response= await fetch("https://sage-dragon-278619.uc.r.appspot.com/api/card", {
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
            return responseJson;
        } catch (error) {
            console.log(error)
        }
    }

    static async update_category(data){
        try {
            const response= await fetch("https://sage-dragon-278619.uc.r.appspot.com/api/update/"+ String(data._id), {
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
            return responseJson;
        } catch (error) {
            console.log(error)
        }
    }

    static async delete_entry(data){
        try {
            const response= await fetch("https://sage-dragon-278619.uc.r.appspot.com/api/remove/"+ String(data._id), {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }})
            const responseJson= response.json();
            return responseJson;
        } catch (error) {
            console.log(error)
        }
    }


}