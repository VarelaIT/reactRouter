import Accordion from "./Accordion";

export default function DepartmentsComponent() {

    return <Accordion title="Departments">
        <ul>
            <li><h6>Human Resoruses</h6></li>
            <li><h6>Public Relations</h6></li>
            <li><h6>Customer Service</h6></li>
            <li><h6>Management</h6></li>
            <li><h6>Opeartions</h6></li>
        </ul>
    </Accordion>;
}