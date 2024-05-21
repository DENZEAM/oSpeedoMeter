function SendReactMessage(action, data)

  ---@diagnostic disable-next-line: undefined-global
  SendNUIMessage({
    action = action,
    data = data
  })
end
function getVehicleLightsState()
  local playerPed = GetPlayerPed(-1)
  local vehicle = GetVehiclePedIsIn(playerPed, false)

  if vehicle ~= 0 then
    local lightsOn, highbeamsOn = GetVehicleLightsState(vehicle)
    print("Lights on: ", lightsOn, " Highbeams on: ", highbeamsOn)

    if lightsOn and highbeamsOn == 0 then
      return "off" -- Feux de croisement allumés
    elseif lightsOn and highbeamsOn == 1 then
      return "high" -- Pleins phares allumés
    else
      return "off" -- Phares éteints
    end
  else
    return nil -- Aucun véhicule trouvé
  end
end

function getFuelPercentage()
  local vehicle = GetVehiclePedIsIn(GetPlayerPed(-1), false) -- Obtenir le véhicule du joueur

  if vehicle ~= 0 then
      local fuelTankCapacity = GetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fPetrolTankVolume')
      local currentFuel = GetVehicleFuelLevel(vehicle)

      -- Calcul du pourcentage de carburant (arrondi à deux décimales)
      local fuelPercentage = math.floor((currentFuel / fuelTankCapacity) * 10000) / 100

      return fuelPercentage
  else
      return nil -- Aucun véhicule trouvé
  end
end

function getEngineHealthPercentage()
  local vehicle = GetVehiclePedIsIn(GetPlayerPed(-1), false) -- Obtenir le véhicule du joueur

  if vehicle ~= 0 then
    local engineHealth = GetVehicleEngineHealth(vehicle)

    if engineHealth <= 0 then
      return 0 -- Moteur mort
    else
      local maxEngineHealth = 1000.0 -- Valeur maximale de la santé du moteur

      -- Calcul du pourcentage de vie du moteur (arrondi à l'entier le plus proche)
      local engineHealthPercentage = math.floor((engineHealth / maxEngineHealth) * 100 + 0.5)

      return engineHealthPercentage
    end
  else
    return nil -- Aucun véhicule trouvé
  end
end

Citizen.CreateThread(function()
  while true do
    local TickRate = Config.TickRate
    
    local playerPed = PlayerPedId()
    local isInVehicle = IsPedInAnyVehicle(playerPed, false)
    
    if isInVehicle then
      TickRate = Config.TickRateInVehicle
      local vehicle = GetVehiclePedIsIn(playerPed, false)
      local speed = GetEntitySpeed(vehicle) -- speed is in meters per second
      local speedKmH = speed * 3.6 -- convert to km/h
      local speedKmHInt = math.floor(speedKmH) -- convert to integer
      local speedPercentage = (speedKmH / Config.MaxSpeed) * 100 -- calculate the percentage
      local speedPercentageInt = math.floor(speedPercentage) -- convert to integer
      local FuelPourcent = getFuelPercentage()
      local EnginePourcent = getEngineHealthPercentage()
      local lightsState = getVehicleLightsState()
      
      
      print(lightsState)
      print(EnginePourcent)
      print(FuelPourcent)
      SendReactMessage("SetFuel", {fuel = FuelPourcent})
      SendReactMessage("SetEngin", {engin = EnginePourcent})
      SendReactMessage("SetLight", {light = lightsState})
      
      
      print("Player is in a vehicle")
      SendReactMessage("SET_SHOW_ATH",  {show = true})
      SendReactMessage("SetSpeedo", {speed = speedKmHInt, pourcent = speedPercentageInt})
    else
      print("Player is not in a vehicle")
      SendReactMessage("SET_SHOW_ATH",  {show = false})
    end
    Citizen.Wait(TickRate) 
  end
end)