let color = "RED".toLowerCase();

switch (color) {
    case 'green':
        console.log("GO");
        break;
    case 'red':
        console.log("STOP");  
        break;  
    case 'ready':
        console.log("READY");
        break;
    default:
        console.log("Color Error!");
        break;
}

//Browser validation

let browserName='firefox';

switch (browserName.toLowerCase()) {
    case 'chrome':
        console.log("Test is executing in " +browserName);
        break;
    case 'edge':
        console.log("Test is executing in " +browserName);
         break;
    case 'firefox':
        case 'FIREFOX':
        console.log("Test is executing in " +browserName);
         break;     

    default:
        console.log("Browser not match and test is not executing..");
         break;
}