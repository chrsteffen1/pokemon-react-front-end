import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'


const Profiles = ({user}) => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <>
      {profiles.map((profile, idx) => 
        <p key={idx}>{profile.name}</p>
      )}
    </>
  )
}
 
export default Profiles