from config_2 import get_db_connection
from datetime import datetime

def room_to_json(room_data):
    return {
        "RoomID": room_data['RoomID'],  # Assuming the correct key is 'RoomID'
        "RoomType": room_data['RoomType'],
        "Price": room_data['Price'],
        "Availability": room_data['Availability'],  # Assuming 'Availability' corresponds to availability status
        "Features": room_data['Features'],
        "Image": room_data['image']
    }

def create_room(RoomID ,RoomType, Price, Availability, Features, picture_path):
    connection = get_db_connection()
    cursor = connection.cursor()

    sql = """
    INSERT INTO room (RoomID, RoomType, Price, Availability, Features, Image)
    VALUES (%s, %s, %s, %s, %s, %s)
    """
    cursor.execute(sql, (RoomID, RoomType, Price, Availability, Features, picture_path))
    connection.commit()
    cursor.close()
    connection.close()


def get_all_room():
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM room")
    rooms = cursor.fetchall()
    cursor.close()
    connection.close()
    return [room_to_json(room) for room in rooms]

def get_room_by_id(room_id):
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM room WHERE RoomID = %s", (room_id,))
    room = cursor.fetchone()
    cursor.close()
    connection.close()
    return room_to_json(room) if room else None

def update_room(room_id, room_type=None, price=None, availability=None, features=None):
    connection = get_db_connection()
    cursor = connection.cursor()
    updates = []
    values = []

    
    if room_type is not None:
        updates.append("RoomType = %s")
        values.append(room_type)
    if price is not None:
        updates.append("Price = %s")
        values.append(price)
    if availability is not None:
        updates.append("Availability = %s")
        values.append(availability)
    if features is not None:
        updates.append("Features = %s")
        values.append(features)

    values.append(room_id)
    sql = f"UPDATE room SET {', '.join(updates)} WHERE RoomID = %s"
    cursor.execute(sql, tuple(values))
    connection.commit()
    cursor.close()
    connection.close()

def delete_room(room_id):
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute("DELETE FROM room WHERE RoomID = %s", (room_id,))
    connection.commit()
    cursor.close()
    connection.close()