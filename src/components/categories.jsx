import Accordion from "./Accordion.jsx"
export default function CategoriesComponent(){

    return <Accordion title="Categories"> 
        <ul>
            <li><h6>Employees</h6></li>
            <li><h6>Customers</h6></li>
            <li><h6>Visitors</h6></li>
            <li><h6>Filantrophy</h6></li>
            <li><h6>More</h6></li>
        </ul>
    </Accordion>;
}