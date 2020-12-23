import companyLogo from '../assets/bitmap084eb159.png';
import requestLogo1 from '../assets/bitmapdeed50a5.png';
import requestLogo2 from '../assets/bitmap8dedd10f.png';
import postImg from '../assets/bitmap3fa8fe8d.png';

export const data = {
	name: 'Singapore Green Building Council',
	logo: companyLogo,
	numMembers: 223,
	numRequests: 22,
	requestsList: [
		{
			name: 'Association of Con ...',
			logo: requestLogo1,
			hrsSince: 2,
			id: '001'
		},
		{
			name: 'Singapore Institute ...',
			logo: requestLogo2,
			hrsSince: 2,
			id: '002'
		},
		{
			name: 'Singapore Institute ...',
			logo: requestLogo2,
			hrsSince: 2,
			id: '003'
		},
		{
			name: 'Singapore Institute ...',
			logo: requestLogo2,
			hrsSince: 2,
			id: '004'
		}
	],
	posts: [
		{
			author: 'Rachel Kan',
			position: 'Secretariat at SGBL',
			logo: companyLogo,
			hrsSince: 3,
			text:
				'Carbon is fast becoming a global key metric to address and communicate sustainability. The decarbonisation of an organisation’s operations also helps in improving a company’s reputation and branding among investors and customers. As goals increasingly shift towards Net Zero Carbon, demand is growing for action from organisations to mitigate carbon emissions in their business operations.',
			img: '',
			numLikes: 216,
			id: '01'
		},
		{
			author: 'Rachel Kan',
			position: 'Secretariat at SGBL',
			logo: companyLogo,
			hrsSince: 3,
			text:
				'BuildTech Asia 2021 happens on 20th Oct - https://buildtechasia.com',
			img: postImg,
			numLikes: 216,
			id: '02'
		},
		{
			author: 'Rachel Kan',
			position: 'Secretariat at SGBL',
			logo: companyLogo,
			hrsSince: 3,
			text:
				'BuildTech Asia 2021 happens on 20th Oct - https://buildtechasia.com',
			img: postImg,
			numLikes: 216,
			id: '03'
		}
	]
};
