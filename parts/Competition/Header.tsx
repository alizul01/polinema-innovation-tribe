import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="max-w-screen-sm mx-auto">
      <h1 className="text-gray-200 text-2xl md:text-3xl font-bold text-center">
        Discover Competition
      </h1>
      <p className="text-slate-400 text-md md:text-lg text-center mt-4 max-w-screen-md mx-auto">
        With the right strategy, you can find competitions, gather a team, and crush the competition! Go get that win!
      </p>
    </header>
  )
}

export default Header