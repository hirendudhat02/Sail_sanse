// export  {
//     label: string;
//     value: string;
//     code: string;
//     image: string;
//     lengths: number;
//     format: any;
//     mask: any;
//   }
  
  export const COUNTRIES  = [
    {
      label: 'US (+1)',
      value: '+1',
      code: 'US',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '($1) $2-$3',
    },
    {
      label: 'India (+91)',
      value: '+91',
      code: 'IN',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg',
      lengths: 10,
      format: /(\d{5})(\d{5})/,
      mask: '$1 $2',
    },
    {
      label: 'Aland Islands (+358)',
      value: '+358',
      code: 'AX',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AX.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Albania (+355)',
      value: '+355',
      code: 'AL',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AL.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Algeria (+213)',
      value: '+213',
      code: 'DZ',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DZ.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'American Samoa (+1684)',
      value: '+1684',
      code: 'AS',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AS.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Andorra (+376)',
      value: '+376',
      code: 'AD',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AD.svg',
      lengths: 6,
      format: /(\d+)/,
      mask: '$1',
    },
    {
      label: 'Angola (+244)',
      value: '+244',
      code: 'AO',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AO.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Anguilla (+1264)',
      value: '+1264',
      code: 'AI',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AI.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Antarctica (+672)',
      value: '+672',
      code: 'AQ',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AQ.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Antigua and Barbuda (+1268)',
      value: '+1268',
      code: 'AG',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AG.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Argentina (+54)',
      value: '+54',
      code: 'AR',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AR.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Armenia (+374)',
      value: '+374',
      code: 'AM',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AM.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Aruba (+297)',
      value: '+297',
      code: 'AW',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AW.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Australia (+61)',
      value: '+61',
      code: 'AU',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Austria (+43)',
      value: '+43',
      code: 'AT',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AT.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Azerbaijan (+994)',
      value: '+994',
      code: 'AZ',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AZ.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Bahamas (+1242)',
      value: '+1242',
      code: 'BS',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BS.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Bahrain (+973)',
      value: '+973',
      code: 'BH',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BH.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Bangladesh (+880)',
      value: '+880',
      code: 'BD',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BD.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Barbados (+1246)',
      value: '+1246',
      code: 'BB',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BB.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Belarus (+375)',
      value: '+375',
      code: 'BY',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BY.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Belgium (+32)',
      value: '+32',
      code: 'BE',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BE.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Belize (+501)',
      value: '+501',
      code: 'BZ',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BZ.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Benin (+229)',
      value: '+229',
      code: 'BJ',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BJ.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Bermuda (+1441)',
      value: '+1441',
      code: 'BM',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BM.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Bhutan (+975)',
      value: '+975',
      code: 'BT',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BT.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Bolivia, Plurinational State of (+591)',
      value: '+591',
      code: 'BO',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BO.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Bosnia and Herzegovina (+387)',
      value: '+387',
      code: 'BA',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BA.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Botswana (+267)',
      value: '+267',
      code: 'BW',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BW.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Brazil (+55)',
      value: '+55',
      code: 'BR',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BR.svg',
      lengths: 11,
      format: /(\d{1})(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3 $4',
    },
    {
      label: 'British Indian Ocean Territory (+246)',
      value: '+246',
      code: 'IO',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IO.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Brunei Darussalam (+673)',
      value: '+673',
      code: 'BN',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BN.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Bulgaria (+359)',
      value: '+359',
      code: 'BG',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BG.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Burkina Faso (+226)',
      value: '+226',
      code: 'BF',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BF.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Burundi (+257)',
      value: '+257',
      code: 'BI',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BI.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Cambodia (+855)',
      value: '+855',
      code: 'KH',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KH.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Cameroon (+237)',
      value: '+237',
      code: 'CM',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CM.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Cape Verde (+238)',
      value: '+238',
      code: 'CV',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CV.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Cayman Islands (+345)',
      value: '+345',
      code: 'KY',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KY.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Central African Republic (+236)',
      value: '+236',
      code: 'CF',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CF.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Chad (+235)',
      value: '+235',
      code: 'TD',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TD.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Chile (+56)',
      value: '+56',
      code: 'CL',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CL.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'China (+86)',
      value: '+86',
      code: 'CN',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CN.svg',
      lengths: 11,
      format: /(\d{1})(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3 $4',
    },
    {
      label: 'Christmas Island (+61)',
      value: '+61',
      code: 'CX',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CX.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Cocos (Keeling) Islands (+61)',
      value: '+61',
      code: 'CC',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CC.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Colombia (+57)',
      value: '+57',
      code: 'CO',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CO.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Comoros (+269)',
      value: '+269',
      code: 'KM',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KM.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Congo (+242)',
      value: '+242',
      code: 'CG',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CG.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Congo, The Democratic Republic of the Congo (+243)',
      value: '+243',
      code: 'CD',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CD.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Cook Islands (+682)',
      value: '+682',
      code: 'CK',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CK.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Costa Rica (+506)',
      value: '+506',
      code: 'CR',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CR.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: "Cote d'Ivoire (+225)",
      value: '+225',
      code: 'CI',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CI.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Croatia (+385)',
      value: '+385',
      code: 'HR',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HR.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Cuba (+53)',
      value: '+53',
      code: 'CU',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CU.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Cyprus (+357)',
      value: '+357',
      code: 'CY',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CY.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Czech Republic (+420)',
      value: '+420',
      code: 'CZ',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CZ.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Denmark (+45)',
      value: '+45',
      code: 'DK',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DK.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Djibouti (+253)',
      value: '+253',
      code: 'DJ',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DJ.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Dominica (+1767)',
      value: '+1767',
      code: 'DM',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DM.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Dominican Republic (+1849)',
      value: '+1849',
      code: 'DO',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DO.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Ecuador (+593)',
      value: '+593',
      code: 'EC',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EC.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Egypt (+20)',
      value: '+20',
      code: 'EG',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EG.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'El Salvador (+503)',
      value: '+503',
      code: 'SV',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SV.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Equatorial Guinea (+240)',
      value: '+240',
      code: 'GQ',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GQ.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Eritrea (+291)',
      value: '+291',
      code: 'ER',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ER.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Estonia (+372)',
      value: '+372',
      code: 'EE',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EE.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Ethiopia (+251)',
      value: '+251',
      code: 'ET',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ET.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Falkland Islands (Malvinas) (+500)',
      value: '+500',
      code: 'FK',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FK.svg',
      lengths: 5,
      format: /(\d+)/,
      mask: '$1',
    },
    {
      label: 'Faroe Islands (+298)',
      value: '+298',
      code: 'FO',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FO.svg',
      lengths: 6,
      format: /(\d+)/,
      mask: '$1',
    },
    {
      label: 'Fiji (+679)',
      value: '+679',
      code: 'FJ',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FJ.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Finland (+358)',
      value: '+358',
      code: 'FI',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FI.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'France (+33)',
      value: '+33',
      code: 'FR',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FR.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'French Guiana (+594)',
      value: '+594',
      code: 'GF',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GF.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'French Polynesia (+689)',
      value: '+689',
      code: 'PF',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PF.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Gabon (+241)',
      value: '+241',
      code: 'GA',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GA.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Gambia (+220)',
      value: '+220',
      code: 'GM',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GM.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Georgia (+995)',
      value: '+995',
      code: 'GE',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GE.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Germany (+49)',
      value: '+49',
      code: 'DE',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Ghana (+233)',
      value: '+233',
      code: 'GH',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GH.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Gibraltar (+350)',
      value: '+350',
      code: 'GI',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GI.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Greece (+30)',
      value: '+30',
      code: 'GR',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GR.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Greenland (+299)',
      value: '+299',
      code: 'GL',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GL.svg',
      lengths: 6,
      format: /(\d+)/,
      mask: '$1',
    },
    {
      label: 'Grenada (+1473)',
      value: '+1473',
      code: 'GD',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GD.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Guadeloupe (+590)',
      value: '+590',
      code: 'GP',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GP.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Guam (+1671)',
      value: '+1671',
      code: 'GU',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GU.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Guatemala (+502)',
      value: '+502',
      code: 'GT',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GT.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Guernsey (+44)',
      value: '+44',
      code: 'GG',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GG.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Guinea (+224)',
      value: '+224',
      code: 'GN',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GN.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Guinea-Bissau (+245)',
      value: '+245',
      code: 'GW',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GW.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Guyana (+595)',
      value: '+595',
      code: 'GY',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GY.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Haiti (+509)',
      value: '+509',
      code: 'HT',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HT.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Holy See (Vatican City State) (+379)',
      value: '+379',
      code: 'VA',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VA.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Honduras (+504)',
      value: '+504',
      code: 'HN',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HN.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Hong Kong (+852)',
      value: '+852',
      code: 'HK',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HK.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Hungary (+36)',
      value: '+36',
      code: 'HU',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HU.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Iceland (+354)',
      value: '+354',
      code: 'IS',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IS.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Indonesia (+62)',
      value: '+62',
      code: 'ID',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Iran (+98)',
      value: '+98',
      code: 'IR',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IR.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Iraq (+964)',
      value: '+964',
      code: 'IQ',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IQ.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Ireland (+353)',
      value: '+353',
      code: 'IE',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IE.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Isle of Man (+44)',
      value: '+44',
      code: 'IM',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IM.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Israel (+972)',
      value: '+972',
      code: 'IL',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IL.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Italy (+39)',
      value: '+39',
      code: 'IT',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IT.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Jamaica (+1876)',
      value: '+1876',
      code: 'JM',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JM.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Japan (+81)',
      value: '+81',
      code: 'JP',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JP.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Jersey (+44)',
      value: '+44',
      code: 'JE',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JE.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Jordan (+962)',
      value: '+962',
      code: 'JO',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JO.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Kazakhstan (+77)',
      value: '+77',
      code: 'KZ',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KZ.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Kenya (+254)',
      value: '+254',
      code: 'KE',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KE.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Kiribati (+686)',
      value: '+686',
      code: 'KI',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KI.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: "Korea, Democratic People's Republic of Korea (+850)",
      value: '+850',
      code: 'KP',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KP.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Korea, Republic of South Korea (+82)',
      value: '+82',
      code: 'KR',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KR.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Kuwait (+965)',
      value: '+965',
      code: 'KW',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KW.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Kyrgyzstan (+996)',
      value: '+996',
      code: 'KG',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KG.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Laos (+856)',
      value: '+856',
      code: 'LA',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LA.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Latvia (+371)',
      value: '+371',
      code: 'LV',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LV.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Lebanon (+961)',
      value: '+961',
      code: 'LB',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LB.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Lesotho (+266)',
      value: '+266',
      code: 'LS',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LS.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Liberia (+231)',
      value: '+231',
      code: 'LR',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LR.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Libyan Arab Jamahiriya (+218)',
      value: '+218',
      code: 'LY',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LY.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Liechtenstein (+423)',
      value: '+423',
      code: 'LI',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LI.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Lithuania (+370)',
      value: '+370',
      code: 'LT',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LT.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Luxembourg (+352)',
      value: '+352',
      code: 'LU',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LU.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Macao (+853)',
      value: '+853',
      code: 'MO',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MO.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Macedonia (+389)',
      value: '+389',
      code: 'MK',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MK.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Madagascar (+261)',
      value: '+261',
      code: 'MG',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MG.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Malawi (+265)',
      value: '+265',
      code: 'MW',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MW.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Malaysia (+60)',
      value: '+60',
      code: 'MY',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MY.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Maldives (+960)',
      value: '+960',
      code: 'MV',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MV.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Mali (+223)',
      value: '+223',
      code: 'ML',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ML.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Malta (+356)',
      value: '+356',
      code: 'MT',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MT.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Marshall Islands (+692)',
      value: '+692',
      code: 'MH',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MH.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Martinique (+596)',
      value: '+596',
      code: 'MQ',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MQ.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Mauritania (+222)',
      value: '+222',
      code: 'MR',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MR.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Mauritius (+230)',
      value: '+230',
      code: 'MU',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MU.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Mayotte (+262)',
      value: '+262',
      code: 'YT',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YT.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Mexico (+52)',
      value: '+52',
      code: 'MX',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MX.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Micronesia, Federated States of Micronesia (+691)',
      value: '+691',
      code: 'FM',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FM.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Moldova (+373)',
      value: '+373',
      code: 'MD',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MD.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Monaco (+377)',
      value: '+377',
      code: 'MC',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MC.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Mongolia (+976)',
      value: '+976',
      code: 'MN',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MN.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Montenegro (+382)',
      value: '+382',
      code: 'ME',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ME.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Montserrat (+1664)',
      value: '+1664',
      code: 'MS',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MS.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Morocco (+212)',
      value: '+212',
      code: 'MA',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MA.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Mozambique (+258)',
      value: '+258',
      code: 'MZ',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MZ.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Myanmar (+95)',
      value: '+95',
      code: 'MM',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MM.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Namibia (+264)',
      value: '+264',
      code: 'NA',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NA.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Nauru (+674)',
      value: '+674',
      code: 'NR',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NR.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Nepal (+977)',
      value: '+977',
      code: 'NP',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NP.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Netherlands (+31)',
      value: '+31',
      code: 'NL',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NL.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'New Caledonia (+687)',
      value: '+687',
      code: 'NC',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NC.svg',
      lengths: 6,
      format: /(\d+)/,
      mask: '$1',
    },
    {
      label: 'New Zealand (+64)',
      value: '+64',
      code: 'NZ',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NZ.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Nicaragua (+505)',
      value: '+505',
      code: 'NI',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NI.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Niger (+227)',
      value: '+227',
      code: 'NE',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NE.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Nigeria (+234)',
      value: '+234',
      code: 'NG',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Niue (+683)',
      value: '+683',
      code: 'NU',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NU.svg',
      lengths: 4,
      format: /(\d+)/,
      mask: '$1',
    },
    {
      label: 'Norfolk Island (+672)',
      value: '+672',
      code: 'NF',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NF.svg',
      lengths: 6,
      format: /(\d+)/,
      mask: '$1',
    },
    {
      label: 'Northern Mariana Islands (+1670)',
      value: '+1670',
      code: 'MP',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MP.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Norway (+47)',
      value: '+47',
      code: 'NO',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NO.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Oman (+968)',
      value: '+968',
      code: 'OM',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/OM.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Pakistan (+92)',
      value: '+92',
      code: 'PK',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Palau (+680)',
      value: '+680',
      code: 'PW',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PW.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Palestinian Territory, Occupied (+970)',
      value: '+970',
      code: 'PS',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PS.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Panama (+507)',
      value: '+507',
      code: 'PA',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PA.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Papua New Guinea (+675)',
      value: '+675',
      code: 'PG',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PG.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Paraguay (+595)',
      value: '+595',
      code: 'PY',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PY.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Peru (+51)',
      value: '+51',
      code: 'PE',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PE.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Philippines (+63)',
      value: '+63',
      code: 'PH',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PH.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Pitcairn (+872)',
      value: '+872',
      code: 'PN',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PN.svg',
      lengths: 6,
      format: /(\d+)/,
      mask: '$1',
    },
    {
      label: 'Poland (+48)',
      value: '+48',
      code: 'PL',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PL.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Portugal (+351)',
      value: '+351',
      code: 'PT',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PT.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Puerto Rico (+1939)',
      value: '+1939',
      code: 'PR',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PR.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Qatar (+974)',
      value: '+974',
      code: 'QA',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/QA.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Romania (+40)',
      value: '+40',
      code: 'RO',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RO.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Rwanda (+250)',
      value: '+250',
      code: 'RW',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RW.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Reunion (+262)',
      value: '+262',
      code: 'RE',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RE.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Saint Barthelemy (+590)',
      value: '+590',
      code: 'BL',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BL.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Saint Helena, Ascension and Tristan Da Cunha (+290)',
      value: '+290',
      code: 'SH',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SH.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Saint Kitts and Nevis (+1869)',
      value: '+1869',
      code: 'KN',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KN.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Saint Lucia (+1758)',
      value: '+1758',
      code: 'LC',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LC.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Saint Martin (+590)',
      value: '+590',
      code: 'MF',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MF.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Saint Pierre and Miquelon (+508)',
      value: '+508',
      code: 'PM',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PM.svg',
      lengths: 6,
      format: /(\d+)/,
      mask: '$1',
    },
    {
      label: 'Saint Vincent and the Grenadines (+1784)',
      value: '+1784',
      code: 'VC',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VC.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Samoa (+685)',
      value: '+685',
      code: 'WS',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WS.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'San Marino (+378)',
      value: '+378',
      code: 'SM',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SM.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Sao Tome and Principe (+239)',
      value: '+239',
      code: 'ST',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ST.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Saudi Arabia (+966)',
      value: '+966',
      code: 'SA',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SA.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Senegal (+221)',
      value: '+221',
      code: 'SN',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SN.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Serbia (+381)',
      value: '+381',
      code: 'RS',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RS.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Seychelles (+248)',
      value: '+248',
      code: 'SC',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SC.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Sierra Leone (+232)',
      value: '+232',
      code: 'SL',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SL.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Singapore (+65)',
      value: '+65',
      code: 'SG',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SG.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Slovakia (+421)',
      value: '+421',
      code: 'SK',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SK.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Slovenia (+386)',
      value: '+386',
      code: 'SI',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SI.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Solomon Islands (+677)',
      value: '+677',
      code: 'SB',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SB.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Somalia (+252)',
      value: '+252',
      code: 'SO',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SO.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'South Africa (+27)',
      value: '+27',
      code: 'ZA',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZA.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'South Sudan (+211)',
      value: '+211',
      code: 'SS',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SS.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'South Georgia and the South Sandwich Islands (+500)',
      value: '+500',
      code: 'GS',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GS.svg',
      lengths: 6,
      format: /(\d+)/,
      mask: '$1',
    },
    {
      label: 'Spain (+34)',
      value: '+34',
      code: 'ES',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ES.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Sri Lanka (+94)',
      value: '+94',
      code: 'LK',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LK.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Sudan (+249)',
      value: '+249',
      code: 'SD',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SD.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Suriname (+597)',
      value: '+597',
      code: 'SR',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SR.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Svalbard and Jan Mayen (+47)',
      value: '+47',
      code: 'SJ',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SJ.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Swaziland (+268)',
      value: '+268',
      code: 'SZ',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SZ.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Sweden (+46)',
      value: '+46',
      code: 'SE',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SE.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Switzerland (+41)',
      value: '+41',
      code: 'CH',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CH.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Syrian Arab Republic (+963)',
      value: '+963',
      code: 'SY',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SY.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Taiwan (+886)',
      value: '+886',
      code: 'TW',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TW.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Tajikistan (+992)',
      value: '+992',
      code: 'TJ',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TJ.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Tanzania, United Republic of (+255)',
      value: '+255',
      code: 'TZ',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TZ.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Thailand (+66)',
      value: '+66',
      code: 'TH',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TH.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Timor-Leste (+670)',
      value: '+670',
      code: 'TL',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TL.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Togo (+228)',
      value: '+228',
      code: 'TG',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TG.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Tokelau (+690)',
      value: '+690',
      code: 'TK',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TK.svg',
      lengths: 6,
      format: /(\d+)/,
      mask: '$1',
    },
    {
      label: 'Tonga (+676)',
      value: '+676',
      code: 'TO',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TO.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Trinidad and Tobago (+1868)',
      value: '+1868',
      code: 'TT',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TT.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Tunisia (+216)',
      value: '+216',
      code: 'TN',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TN.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Turkey (+90)',
      value: '+90',
      code: 'TR',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TR.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Turkmenistan (+993)',
      value: '+993',
      code: 'TM',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TM.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Turks and Caicos Islands (+1649)',
      value: '+1649',
      code: 'TC',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TC.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Tuvalu (+688)',
      value: '+688',
      code: 'TV',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TV.svg',
      lengths: 5,
      format: /(\d+)/,
      mask: '$1',
    },
    {
      label: 'Uganda (+256)',
      value: '+256',
      code: 'UG',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UG.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'United Arab Emirates (+971)',
      value: '+971',
      code: 'AE',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AE.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'United Kingdom (+44)',
      value: '+44',
      code: 'GB',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Uruguay (+598)',
      value: '+598',
      code: 'UY',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UY.svg',
      lengths: 8,
      format: /(\d{2})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Uzbekistan (+998)',
      value: '+998',
      code: 'UZ',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UZ.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Vanuatu (+678)',
      value: '+678',
      code: 'VU',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VU.svg',
      lengths: 7,
      format: /(\d{3})(\d{4})/,
      mask: '$1 $2',
    },
    {
      label: 'Venezuela (+58)',
      value: '+58',
      code: 'VE',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VE.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Vietnam (+84)',
      value: '+84',
      code: 'VN',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VN.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Virgin Islands, British (+1284)',
      value: '+1284',
      code: 'VG',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VG.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Virgin Islands, U.S. (+1340)',
      value: '+1340',
      code: 'VI',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VI.svg',
      lengths: 10,
      format: /(\d{3})(\d{3})(\d{4})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Wallis and Futuna (+681)',
      value: '+681',
      code: 'WF',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WF.svg',
      lengths: 6,
      format: /(\d+)/,
      mask: '$1',
    },
    {
      label: 'Yemen (+967)',
      value: '+967',
      code: 'YE',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YE.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Zambia (+260)',
      value: '+260',
      code: 'ZM',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZM.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
    {
      label: 'Zimbabwe (+263)',
      value: '+263',
      code: 'ZW',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZW.svg',
      lengths: 9,
      format: /(\d{3})(\d{3})(\d{3})/,
      mask: '$1 $2 $3',
    },
  ];
  export const COUNTRY_US = [
    {
      label: 'US',
      value: '+1',
      code: 'US',
      image:
        'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg',
    },
  ];
  