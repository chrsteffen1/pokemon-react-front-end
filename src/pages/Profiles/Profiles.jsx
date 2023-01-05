import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import GameSearchForm from '../../components/GameSearchForm/GameSearchForm'

const Profiles = () => {
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
      <GameSearchForm />
    </>
  )
}
 
export default Profiles