
function describe_city(city: string, country:string = 'Default Country') {
    console.log(`${city} is in ${country}`);
}
describe_city('Karachi', 'Pakistan');
describe_city('Jeddah', 'KSA');
describe_city('Lahore');