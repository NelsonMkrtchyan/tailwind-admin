import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function EmailConfirmation(){
    return(
        <div style={{marginTop:'50px', display:'flex', justifyContent:'center'}}>
            <table cellPadding="0" cellSpacing="0" style={{fontFamily:'Inter, sans-serif', fontSize:'15px', fontWeight:'400', maxWidth:'600px', border:'none', margin:'0, auto', borderRadius:'6px', overflow:'hidden', backgroundColor:'#fff', boxShadow:'0 0 3px rgba(60, 72, 88, 0.15)'}}>
                <thead>
                    <tr style={{ backgroundColor:'#396cf0', padding:'3px 0', border:'none', lineHeight:'68px', textAlign:'center', color:'#fff', fontSize:'24px', letterSpacing:'1px'}}>
                        <th scope="col"><Image src='/images/logo-light.png' width={115} height={22} alt=""/></th>
                    </tr>
                </thead>
    
                <tbody>
                    <tr>
                        <td style={{ padding:'48px 24px 0', color:'#161c2d', fontSize:'18px', fontWeight:'600'}}>
                            Hello, Harry
                        </td>
                    </tr>
                    <tr>
                        <td style={{ padding: '15px 24px 15px', color: '#8492a6' }}>
                            Thanks for creating an Doctris account. To continue, please confirm your email address by clicking the button below :
                        </td>
                    </tr>
    
                    <tr>
                        <td style={{padding: '15px 24px'}}>
                            <Link href="#" style={{padding: '8px 20px', outline: 'none', textDecoration: 'none', fontSize: '16px', letterSpacing: '0.5px', transition: 'all 0.3s', fontWeight: '600', borderRadius: '6px', backgroundColor: '#396cf0', border: '1px solid #396cf0', color: '#ffffff'}}>Confirm Email Address</Link>
                        </td>
                    </tr>
    
                    <tr>
                        <td style={{padding: '15px 24px 0', color: '#8492a6'}}>
                            This link will be active for 30 min from the time this email was sent.
                        </td>
                    </tr>
    
                    <tr>
                        <td style={{padding: '15px 24px 15px', color: '#8492a6'}}>
                            Doctris <br/> Support Team
                        </td>
                    </tr>
    
                    <tr>
                        <td style={{padding: '16px 8px', color:' #8492a6', backgroundColor: '#f8f9fc', textAlign: 'center'}}>
                            © {new Date().getFullYear()} Doctris.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}