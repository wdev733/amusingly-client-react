export const defaultMenuType = 'menu-sub-hidden'; // 'menu-default', 'menu-sub-hidden', 'menu-hidden';
export const defaultStartPath = '/instagram'; 
export const subHiddenBreakpoint=1440;
export const menuHiddenBreakpoint = 768;
export const defaultLocale='en';
export const localeOptions=[
    {id:'en',name:'English'},
    {id:'es',name:'Español'},
];

export const firebaseConfig = {
    apiKey: "AIzaSyBBksq-Asxq2M4Ot-75X19IyrEYJqNBPcg",
    authDomain: "gogo-react-login.firebaseapp.com",
    databaseURL: "https://gogo-react-login.firebaseio.com",
    projectId: "gogo-react-login",
    storageBucket: "gogo-react-login.appspot.com",
    messagingSenderId: "216495999563"
};

export const photoServerUrl = "https://www.amusingly.com/"

// export const serverUrl = "http://localhost:3061/"
export const serverUrl = "http://3.19.58.151:3061/"

export const searchPath = "/instagram"

export const defaultCustomer = {
    CustomerID: 0,
    UserName: "",
    Password: "",
    Name: "",
    Email: "",
    Phone: "",
    BillingAddress1: "",
    BillingAddress2: "",
    City: "",
    Country: "",
    State: "",
    InstaProfileName: "",
    SalesRep: "",
    UrlKey: "",
    InstaUserId: "",
    AccessToken: "",
    ProfileLogo: "",
    LastLogin: "",
    LastSync: "",
    Status: 0,
    autosyscro: 0
}

export const widgetType = [
    { label: "GRID", value: "Grid", key: 0 },
    { label: "SLIDER", value: "Slider", key: 1 },
    { label: "FULL PAGE", value: "Full Page", key: 2 }
];

export const widgetStyle = [
  { label: "SINGLEL ROW", value: "Single Row", key: 0 },
  { label: "DOUBLE ROW", value: "Double Row", key: 1 }
];

export const layoutType = [
    { label: "1", value: "1", key: 0 },
    { label: "2", value: "2", key: 1 },
    { label: "3", value: "3", key: 2 },
    { label: "4", value: "4", key: 2 }
];

export const hoverEffectType = [
    { label: "NONE", value: "None", key: 0 },
    { label: "DARK", value: "Dark", key: 1 },
    { label: "LIGHT", value: "Light", key: 2 }
];

export const usePopupType = [
    { label: "YES", value: "Yes", key: 0 },
    { label: "NO", value: "No", key: 1 }
];

export const socialSharingType = [
    { label: "YES", value: "Yes", key: 0 },
    { label: "NO", value: "No", key: 1 }
];

export const widgetCode = `<script src="https://www.amusingly.com/user/js/sync.api.slider.js" type="text/javascript"></script><div id="am-slider-widget-container" data-id="misticecig"></div>`;