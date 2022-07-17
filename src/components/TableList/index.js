import  React,{ Component } from 'react';
import api from '../../api';
import {DataGrid} from '@mui/x-data-grid';
import {Box} from '@mui/system';

const columns = [
    {field : "id", headerName: "ID",with:90},
    {
        field : "description",
        headerName: "Description",
        with:150, 
        editable: true,
    },

    {
        field : "domain_type",
        headerName: "Domain Type",
        with:150, 
        editable: true,
    },

    {
        field : "dominio",
        headerName: "Dominio",
        with:90,
        editable: true,
    },

    {
        field : "status",
        headerName: "Status",
        with:90, 
        sortable: false,
    },

    {
        field : "valor",
        headerName: "valor",
        with:90, 
        sortable: false,
    },
    {
        field : "ordem",
        headerName: "ordem",
        with:90, 
        sortable: false,
    },
];

class TableList extends Component {

    

    state = {
        domains : [],
    }

    async componentDidMount (){
        const response = await api.get('dominio/show');
        console.log("dasdasd",response.data.data);
        this.setState({domains: response.data.data});
    }

    render() {

        const {domains} = this.state;

        return (
            <div>  
                <h1>Listar dominios</h1>
                <Box height={400} width={1000} margin={6} margin-left={1000}> 
                  <DataGrid columns={columns} rows = {domains}/>
                </Box> 
            </div>
        );
    };
}


export default TableList;
